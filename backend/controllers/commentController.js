import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import Comment from "../models/Comment.js";
import CommentLike from "../models/CommentLike.js";
import User from "../models/User.js";
import Build from "../models/Build.js";
import { getIdsAndEntitiesOfComments } from "../utils/helpers.js";

// @desc Get comments
// @route GET /comments
// @access Public
const getComments = async (req, res) => {
    const {
        targetId,
        targetType,
        parentId,
        sort = "new",
        limit = 10,
        lastFetchedTimestamp,
    } = req.query;
    try {
        //create a filter for db query
        const filter = { targetId, targetType };
        if (!parentId) {
            // Count root comments
            filter.parentId = null;
        } else {
            // Count replies
            filter.parentId = parentId;
        }

        //get total amount of comments or replies if parentId is was provided
        const totalComments = await Comment.countDocuments(filter);

        // create sortOption and further filters to get comments
        let sortOption = { createdAt: -1 }; // Default sort is "newest first"
        /* add Cursor-Based Pagination with Sorting by Metrics later*/
        // Handle the case when lastFetchedTimestamp is not provided or is empty
        if (!parentId) {
            if (sort === "new") {
                const lfts = lastFetchedTimestamp || new Date(9999, 11, 31).toISOString();  //|| new Date().toISOString();
                filter.createdAt = { $lt: lfts };
            } else if (sort === "old") {
                const lfts = lastFetchedTimestamp || new Date(0).toISOString();
                filter.createdAt = { $gt: lfts };
                sortOption = { createdAt: 1 }; // Change sort order to "oldest first"
            } else if (sort === "popular") {
                sortOption = { likes: -1 };
                // No need to modify filter for "popular" sorting
            }
        } else {
            // ignore sort passed from frontend. For replies always order from oldest to newest
            const lfts = lastFetchedTimestamp || new Date(0).toISOString();
            filter.createdAt = { $gt: lfts };
            sortOption = { createdAt: 1 }
        }

        // get comments or replies depending on filter
        const comments = await Comment
            .find(filter)
            .populate({
                path: "authorId",
                select: "username avatarUrl"
            })
            .sort(sortOption)
            .limit(parseInt(limit));


        //check if request comes from user or visitor
        const authHeader = req.headers.authorization || req.headers.Authorization;
        let userId = null;
        if (authHeader?.startsWith("Bearer ")) {
            const token = authHeader.split(" ")[1];
            jwt.verify(
                token,
                process.env.ACCESS_TOKEN_SECRET,
                (err, decoded) => {
                    if (err) return
                    userId = decoded.UserInfo.userId;
                }
            );
        }
        //if no userId return comments
        if (!userId) {
            //convert _id to id and transform the authorId object into a string + attaching username
            const transformedComments = comments.map(comment => ({
                ...comment.toObject(),
                id: comment._id.toString(),
                authorId: comment.authorId._id.toString(),
                username: comment.authorId.username,
                avatarUrl: comment.authorId.avatarUrl,
            }));
            //get ids and entities
            const { ids, entities } = getIdsAndEntitiesOfComments(transformedComments);
            //send response
            return res.status(200).json({
                ids,
                entities,
                totalComments,
            });
        }


        //if userId present
        //get all the likes and dislikes of the user to the found comments
        const commentIds = comments.map(comment => comment._id);
        const likes = await CommentLike.find({ commentId: { $in: commentIds }, userId, type: "like" });
        const dislikes = await CommentLike.find({ commentId: { $in: commentIds }, userId, type: "dislike" });
        const likedCommentIds = likes.map(like => like.commentId.toString());
        const dislikedCommentIds = dislikes.map(dislikes => dislikes.commentId.toString());
        //convert _id to id and transform the authorId object into a string + attaching username
        //attach the like status to the found comments
        const commentsWithLikeStatus = comments.map(comment => ({
            ...comment.toObject(),
            id: comment._id.toString(),
            authorId: comment.authorId._id.toString(),
            username: comment.authorId.username,
            avatarUrl: comment.authorId.avatarUrl,
            hasLiked: likedCommentIds.includes(comment._id.toString()),
            hasDisliked: dislikedCommentIds.includes(comment._id.toString()),
        }));
        //get ids and entities
        const { ids, entities } = getIdsAndEntitiesOfComments(commentsWithLikeStatus);
        //send the response
        res.status(200).json({
            ids,
            entities,
            totalComments,
        });
    } catch (err) {
        res.status(500).json({ message: "Error retrieving comments" });
    }
};

// @desc Create new comment
// @route POST /comments
// @access Private
const createComment = async (req, res) => {
    const { userId } = req;
    const { authorId, content, targetId, targetType, parentId } = req.body;

    const clientSession = await mongoose.startSession();

    try {
        clientSession.startTransaction();

        //check if authenticated user is author
        if (userId !== authorId) {
            await clientSession.abortTransaction();
            return res.status(403).json({ message: "Id of authenticated user doesnt match id of comment author" })
        }

        //check if author exists in database -> maybe redundant
        const author = await User.findById(authorId).session(clientSession);
        if (!author) {
            await clientSession.abortTransaction();
            return res.status(400).json({ message: "User not found" });
        }

        //check if targetId exists in database
        let target;
        if (targetType === "Build") {
            target = await Build.findById(targetId).session(clientSession);
        } else if (targetType === "User") {
            target = await User.findById(targetId).session(clientSession);
        }

        if (!target) {
            await clientSession.abortTransaction();
            return res.status(400).json({ message: "Target not found" });
        }

        //check if parentId exists in database
        if (parentId) {
            const parentComment = await Comment.findById(parentId).session(clientSession);
            if (!parentComment) {
                await clientSession.abortTransaction();
                return res.status(400).json({ message: "Parent comment not found" });
            }

            // only increase totalReplies if parentComment is a root comment and not a reply
            if (parentComment.parentId === null) {
                parentComment.totalReplies += 1;
                await parentComment.save({ clientSession });
            }
        }

        //create new comment in database
        const newComment = await Comment.create(
            [{
                authorId,
                parentId: parentId ? parentId : null,
                targetId,
                targetType,
                content,
            }],
            { clientSession }
        );

        // increment totalComments of author by 1;
        author.totalComments = (author.totalComments || 0) + 1;
        await author.save({ session: clientSession });

        // add id and author details
        const transformedComment = {
            ...newComment[0].toObject(),
            id: newComment[0]._id.toString(),
            username: author.username,
            avatarUrl: author.avatarUrl,
        };

        // end transaction
        await clientSession.commitTransaction();
        res.status(201).json(transformedComment);
    } catch (err) {
        await clientSession.abortTransaction();
        res.status(500).json({ message: "Error creating new comment" });
    } finally {
        clientSession.endSession();
    }
};

// @desc Updates comment
// @route PATCH /comments/:id
// @access Private
const updateComment = async (req, res) => {
    const { userId } = req;
    const { id } = req.params;
    const { content } = req.body;

    const clientSession = await mongoose.startSession();

    try {
        clientSession.startTransaction();

        const foundComment = await Comment.findById(id).session(clientSession);

        //check if comment exists
        if (!foundComment) {
            await clientSession.abortTransaction();
            return res.status(400).json({ message: "Comment not found" });
        }

        //check if authenticated user is author
        if (!foundComment.authorId.equals(userId)) {
            await clientSession.abortTransaction();
            return res.status(403).json({ message: "Id of authenticated user doesnt match id of comment author" })
        }

        //check if User exists in database -> maybe redundant
        const author = await User.findById(userId).session(clientSession);
        if (!author) {
            await clientSession.abortTransaction();
            return res.status(400).json({ message: "User not found" });
        }

        foundComment.content = content;
        foundComment.modifiedByUserAt = new Date();
        const updatedComment = await foundComment.save({ clientSession });

        // add id and author details
        const transformedComment = {
            ...updatedComment.toObject(),
            id: updatedComment._id.toString(),
            username: author.username,
            avatarUrl: author.avatarUrl,
        };

        await clientSession.commitTransaction();
        res.status(200).json(transformedComment);
    } catch (err) {
        await clientSession.abortTransaction();
        res.status(500).json({ message: "Error updating comment" });
    } finally {
        clientSession.endSession();
    }
};

// @desc Deletes comment
// @route DELETE /comments/:id
// @access Private
const deleteComment = async (req, res) => {
    const { userId } = req;
    const { id } = req.params;
    const {
        targetId,
        targetType,
    } = req.query;

    const clientSession = await mongoose.startSession();

    try {
        clientSession.startTransaction();

        if (!id) {
            return res.status(400).json({ message: "Comment id required" });
        }

        const foundComment = await Comment.findById(id).session(clientSession);

        //check if comment exists
        if (!foundComment) {
            await clientSession.abortTransaction();
            return res.status(400).json({ message: "Comment not found" });
        }

        //check if authenticated user is author or if it is his user profile
        if (!foundComment.authorId.equals(userId) && !(targetType === "User" && targetId === userId)) {
            await clientSession.abortTransaction();
            return res.status(403).json({ message: "Not authorized: only author or owner of page can delete a comment" })
        }

        //check if comment is reply to another comment
        if (foundComment.parentId !== null) {
            //if reply
            //remove 1 from totalReplies of parent comment
            const parentComment = await Comment.findById(foundComment.parentId).session(clientSession);
            if (parentComment.totalReplies > 0) {
                parentComment.totalReplies -= 1;
            }
            await parentComment.save({ clientSession });
        } else {
            //if root comment
            //get all replies and likes to replies and delete them
            const replies = await Comment.find({ parentId: id }).session(clientSession);
            if (replies.length !== 0) {
                // Get all ids of the replies
                // Get amount of replies written by individual users
                const {
                    replyIds,
                    commentDeletionCountByUserId,
                } = replies.reduce((acc, comment) => {
                    // Collect comment/reply IDs
                    acc.replyIds.push(comment._id);

                    // Group comments by author and count
                    if (acc.commentDeletionCountByUserId[comment.authorId]) {
                        acc.commentDeletionCountByUserId[comment.authorId]++;
                    } else {
                        acc.commentDeletionCountByUserId[comment.authorId] = 1;
                    }

                    return acc;
                }, { replyIds: [], commentDeletionCountByUserId: {} });

                // Prepare bulk update operations for users totalComments field
                const bulkUpdateOps = Object.entries(commentDeletionCountByUserId).map(([authorId, commentCount]) => ({
                    updateOne: {
                        filter: { _id: authorId },
                        update: { $inc: { totalComments: -commentCount } }
                    }
                }));

                // Execute bulk update
                await User.bulkWrite(bulkUpdateOps, { session: clientSession });

                // Find all likes associated with these replies
                await CommentLike.deleteMany({ commentId: { $in: replyIds } }).session(clientSession);
                // Delete all replies to the comment
                await Comment.deleteMany({ parentId: id }).session(clientSession);
            }
        }

        //delete all likes associated with comment
        await CommentLike.deleteMany({ commentId: id }).session(clientSession);;
        //delete comment itself
        await Comment.deleteOne({ _id: foundComment._id }).session(clientSession);
        // decrement totalComments of the comment author by 1;
        await User.findByIdAndUpdate(
            foundComment.authorId,
            { $inc: { totalComments: -1 } },
            { session: clientSession, runValidators: true }
        );
        await clientSession.commitTransaction();
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (err) {
        await clientSession.abortTransaction();
        res.status(500).json({ message: "Error deleting comment" });
    } finally {
        clientSession.endSession();
    }
};

// @desc adds like to comment with id
// @route POST /comments/:id/like
// @access Private
const addLike = async (req, res) => {
    const { userId } = req;
    const {
        id,
    } = req.params;
    const {
        type,
    } = req.query;

    const clientSession = await mongoose.startSession();

    try {
        clientSession.startTransaction();

        const foundComment = await Comment.findById(id).session(clientSession);

        //check if comment exists
        if (!foundComment) {
            await clientSession.abortTransaction();
            return res.status(400).json({ message: "Comment not found" });
        }

        //check if authenticated user is author
        if (foundComment.authorId.equals(userId)) {
            await clientSession.abortTransaction();
            return res.status(403).json({ message: "User cannot like their own comments" })
        }

        // get like and dislike status of Comment.
        const foundLike = await CommentLike.findOne({ commentId: id, userId, type: "like" }).session(clientSession);
        const foundDislike = await CommentLike.findOne({ commentId: id, userId, type: "dislike" }).session(clientSession);

        //check if comment is already liked if type is like
        if (type === "like" && foundLike) {
            await clientSession.abortTransaction();
            return res.status(400).json({ message: "Comment is already liked" });
        }

        //check if comment is already disliked if type is dislike
        if (type === "dislike" && foundDislike) {
            await clientSession.abortTransaction();
            return res.status(400).json({ message: "Comment is already disliked" });
        }

        //check if like is being added when comment is currently disliked
        if (type === "like" && foundDislike) {
            //delete dislike
            await CommentLike.deleteOne({ _id: foundDislike._id }).session(clientSession);
            if (foundComment.dislikes > 0) foundComment.dislikes -= 1;
        }

        //check if dislike is being added when comment is currently liked
        if (type === "dislike" && foundLike) {
            //delete like
            await CommentLike.deleteOne({ _id: foundLike._id }).session(clientSession);
            if (foundComment.likes > 0) foundComment.likes -= 1;
        }

        //create like or dislike in database
        await CommentLike.create(
            [{
                commentId: id,
                userId,
                type,
            }],
            { clientSession }
        );

        // increment likes or dislikes count of comment
        if (type === "like") {
            foundComment.likes += 1;
        }

        if (type === "dislike") {
            foundComment.dislikes += 1;
        }

        //save the updated document
        await foundComment.save({ clientSession });
        await clientSession.commitTransaction();
        res.status(201).json({ message: `${type} added` });
    } catch (err) {
        await clientSession.abortTransaction();
        res.status(500).json({ message: `Error adding ${type}` });
    } finally {
        clientSession.endSession();
    }
};

// @desc delete like to comment with id
// @route DELETE /comments/:id/like
// @access Private
const deleteLike = async (req, res) => {
    const { userId } = req;
    const {
        id,
    } = req.params;
    const {
        type,
    } = req.query;

    const clientSession = await mongoose.startSession();

    try {
        clientSession.startTransaction();

        const foundComment = await Comment.findById(id).session(clientSession);

        //check if comment exists
        if (!foundComment) {
            await clientSession.abortTransaction();
            return res.status(400).json({ message: "Comment not found" });
        }

        const foundLikeOrDislike = await CommentLike.findOne({ commentId: id, userId, type }).session(clientSession);
        //check if comment is like/dislike was found
        if (!foundLikeOrDislike) {
            await clientSession.abortTransaction();
            return res.status(400).json({ message: `${type} not found` });
        }

        const deletedLikeOrDislike = await CommentLike.deleteOne({ _id: foundLikeOrDislike._id }).session(clientSession);
        //check if like/dislike got deleted
        if (!deletedLikeOrDislike) {
            await clientSession.abortTransaction();
            return res.status(404).json({ message: "Like not deleted because it was not found" });
        }

        //only decrease likeCount by 1 if likeCount is bigger than 0
        if (type === "like" && foundComment.likes > 0) {
            foundComment.likes -= 1;
        }

        if (type === "dislike" && foundComment.dislikes > 0) {
            foundComment.dislikes -= 1;
        }

        await foundComment.save({ clientSession })
        await clientSession.commitTransaction();
        res.status(200).json({ message: "Like removed" });
    } catch (err) {
        await clientSession.abortTransaction();
        res.status(500).json({ message: "Error removing like" });
    } finally {
        clientSession.endSession();
    }
};

export {
    getComments,
    createComment,
    updateComment,
    deleteComment,
    addLike,
    deleteLike,
}