import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import Build from "../models/Build.js";
import Comment from "../models/Comment.js";
import CommentLike from "../models/CommentLike.js";
import Star from "../models/Star.js";

const deleteUserAndCleanup = async (userId, password = null, requirePasswordCheck = false) => {
    const clientSession = await mongoose.startSession();

    try {
        clientSession.startTransaction();

        // Fetch user
        const user = await User.findById(userId).session(clientSession).exec();
        if (!user) {
            await clientSession.abortTransaction();
            return {
                success: false,
                statusCode: 400,
                message: "User not found"
            };
        }

        // Optionally check password
        if (requirePasswordCheck) {
            if (!password) {
                await clientSession.abortTransaction();
                return {
                    success: false,
                    statusCode: 400,
                    message: "No password provided",
                    context: { label: "password" }
                };
            }

            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                await clientSession.abortTransaction();
                return {
                    success: false,
                    statusCode: 401,
                    message: "Invalid password",
                    context: { label: "password" }
                };
            }
        }

        // Check if the user is protected
        const nonDeletableIds = process.env.NON_DELETABLE_USER_IDS?.split(',') || [];
        if (nonDeletableIds.includes(userId)) {
            await clientSession.abortTransaction();
            return {
                success: false,
                statusCode: 403,
                message: "Account protected from deletion"
            };
        }

        // Track users who commented on userpage, buildspages or replied to deleted users comments for updating totalComment
        const commentDeletionCountByUserId = {};

        // Delete user's own comments and replies
        const commentsOfUser = await Comment.find({ authorId: userId }).session(clientSession).lean().exec();
        for (const { _id, parentId } of commentsOfUser) {
            // if it is a reply
            if (parentId) {
                // decrement totalReplies count of parent comment
                const parentComment = await Comment.findById(parentId).session(clientSession);
                if (parentComment && parentComment.totalReplies > 0) {
                    parentComment.totalReplies -= 1;
                    await parentComment.save({ session: clientSession });
                }
            } else {
                //if root comment
                // get all replies to comment
                const replies = await Comment.find({ parentId: _id }).session(clientSession);
                const replyIds = replies.map(reply => reply._id);
                // Track users who replied to deleted users comments
                replies.forEach(reply => {
                    const authorId = reply.authorId;
                    commentDeletionCountByUserId[authorId] = (commentDeletionCountByUserId[authorId] || 0) + 1;
                });

                // Find and delete all likes associated with these replies
                await CommentLike.deleteMany({ commentId: { $in: replyIds } }).session(clientSession);
                // Delete all replies to the comment
                await Comment.deleteMany({ parentId: _id }).session(clientSession);
            }

            await CommentLike.deleteMany({ commentId: _id }).session(clientSession);
            await Comment.findByIdAndDelete(_id).session(clientSession);
        }

        // Delete comments on the user's profile
        const commentsOnProfile = await Comment.find({ targetType: "User", targetId: userId }).session(clientSession).lean().exec();
        const commentsOnProfileIds = commentsOnProfile.map(comment => comment._id);
        commentsOnProfile.forEach(comment => {
            commentDeletionCountByUserId[comment.authorId] = (commentDeletionCountByUserId[comment.authorId] || 0) + 1;
        });

        await CommentLike.deleteMany({ commentId: { $in: commentsOnProfileIds } }).session(clientSession);
        await Comment.deleteMany({ targetType: "User", targetId: userId }).session(clientSession);

        // Delete builds and related data
        const userBuilds = await Build.find({ user: userId }).session(clientSession).lean().exec();
        const userBuildsIds = userBuilds.map(build => build._id);

        const commentsToUserBuilds = await Comment.find({ targetType: "Build", targetId: { $in: userBuildsIds } }).session(clientSession).lean().exec();
        const commentsToUserBuildsIds = commentsToUserBuilds.map(comment => comment._id);
        commentsToUserBuilds.forEach(comment => {
            commentDeletionCountByUserId[comment.authorId] = (commentDeletionCountByUserId[comment.authorId] || 0) + 1;
        });

        await CommentLike.deleteMany({ commentId: { $in: commentsToUserBuildsIds } }).session(clientSession);
        await Comment.deleteMany({ targetType: "Build", targetId: { $in: userBuildsIds } }).session(clientSession);

        // Get all stars to those builds
        const starsToUserBuilds = await Star.find({ buildId: { $in: userBuildsIds } }).session(clientSession).lean().exec();
        // Count the total number of stars each user has given
        const userStarCounts = starsToUserBuilds.reduce((acc, star) => {
            acc[star.userId] = (acc[star.userId] || 0) + 1;
            return acc;
        }, {});

        // Prepare bulk update operations to decrement users totalStarsGiven field
        const starUpdates = Object.entries(userStarCounts).map(([uid, count]) => ({
            updateOne: {
                filter: { _id: uid },
                update: { $inc: { totalStarsGiven: -count } }
            }
        }));
        // Execute bulk update
        if (starUpdates.length) {
            await User.bulkWrite(starUpdates, { session: clientSession });
        }

        await Star.deleteMany({ buildId: { $in: userBuildsIds } }).session(clientSession);
        await Build.deleteMany({ user: userId }).session(clientSession);

        // Update totalComments counts
        const commentUpdates = Object.entries(commentDeletionCountByUserId).map(([uid, count]) => ({
            updateOne: {
                filter: { _id: uid },
                update: { $inc: { totalComments: -count } }
            }
        }));
        if (commentUpdates.length) {
            await User.bulkWrite(commentUpdates, { session: clientSession });
        }

        // Handle likes/dislikes by user
        const userLikes = await CommentLike.find({ userId }).session(clientSession).lean().exec();
        // decrement likes/dislikes count of comments
        const likeOps = userLikes.map(async ({ commentId, type }) => {
            const comment = await Comment.findById(commentId).session(clientSession);
            if (comment) {
                if (type === "like" && comment.likes > 0) comment.likes -= 1;
                else if (type === "dislike" && comment.dislikes > 0) comment.dislikes -= 1;
                await comment.save({ session: clientSession });
            }
        });
        await Promise.all(likeOps);
        // Delete all likes/dislikes placed by the user
        await CommentLike.deleteMany({ userId }).session(clientSession);

        // Handle stars given by user
        const userStars = await Star.find({ userId }).session(clientSession).lean().exec();
        // decrement the stars count for each build
        const starUpdateBuilds = userStars.map(star => ({
            updateOne: {
                filter: { _id: star.buildId },
                update: { $inc: { stars: -1 } }
            }
        }));
        if (starUpdateBuilds.length) {
            await Build.bulkWrite(starUpdateBuilds, { session: clientSession });
        }
        // Remove stars given by user
        await Star.deleteMany({ userId }).session(clientSession);

        const deletedUsername = user.username;

        // Delete the user
        await user.deleteOne().session(clientSession);
        await clientSession.commitTransaction();

        return {
            success: true,
            statusCode: 200,
            deletedUsername: deletedUsername
        };
    } catch (err) {
        await clientSession.abortTransaction();
        return {
            success: false,
            statusCode: 500,
            message: "Error deleting user",
            error: err
        };
    } finally {
        clientSession.endSession();
    }
}

export {
    deleteUserAndCleanup,
}