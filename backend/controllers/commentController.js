import Comment from "../models/Comment.js";
import CommentLike from "../models/CommentLike.js";

// @desc Get comments
// @route GET /comments
// @access Public
const getComments = async (req, res) => {
    const { targetId, targetType, parentId, limit = 25, offset = 0 } = req.query;
    try {
        //get apply filter and get comments
        const filter = { targetId, targetType };
        if (parentId) filter.parentId = parentId;
        const comments = await Comment
            .find(filter)
            .sort({ createdAt: -1 })
        //.skip(parseInt(offset))
        //.limit(parseInt(limit));

        //get total amount of comments
        const totalComments = await Comment.countDocuments({ targetId, targetType });

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
            return res.status(200).json({
                comments,
                totalComments,
            });
        }

        //get all the likes of the user to the found comments
        const commentIds = comments.map(comment => comment._id);
        const likes = await CommentLike.find({ commentId: { $in: commentIds }, userId });
        const likedCommentIds = likes.map(like => like.commentId.toString());
        //attach the like status to the found comments
        const commentsWithLikeStatus = comments.map(comment => ({
            ...comment.toObject(),
            hasLiked: likedCommentIds.includes(comment._id.toString())
        }));
        //send the commentsWithLikeStatus
        res.status(200).json({
            comments: commentsWithLikeStatus,
            totalComments,
        });
    } catch (err) {
        res.status(500).json({ message: "Error retrieving comments" });
    }
};

// @desc Get comment by id
// @route GET /comments/:id
// @access Public
const getCommentById = async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await Comment.findById(id);
        if (comment) {
            res.status(200).json(comment);
        } else {
            res.status(404).json({ message: "Comment not found" });
        }
    } catch (err) {
        res.status(500).json({ message: "Error retrieving comment by id" });
    }
};

// @desc Create new comment
// @route POST /comments
// @access Private
const createComment = async (req, res) => {
    const { userId } = req;
    const { authorId, content, targetId, targetType, parentId } = req.body;
    try {
        //check if authenticated user is author
        if (userId !== authorId) {
            return res.status(403).json({ message: "Id of authenticated user doesnt match id of comment author" })
        }

        //check if author exists in database -> maybe redundant
        const author = await User.findById(authorId);
        if (!author) {
            return res.status(400).json({ message: "User not found" });
        }

        //check if parentId exists in database
        if (parentId) {
            const parentComment = await Comment.findById(parentId);
            if (!parentComment) {
                return res.status(400).json({ message: "Parent comment not found" });
            }
        }

        //check if targetId exists in database
        let target;
        if (targetType === "Build") {
            target = await Build.findById(targetId);
        } else if (targetType === "User") {
            target = await User.findById(targetId);
        }

        if (!target) {
            return res.status(400).json({ message: "Target not found" });
        }

        //create new comment in database
        const newComment = await Comment.create({
            authorId,
            parentId: parentId ? parentId : null,
            targetId,
            targetType,
            content,
        });
        res.status(201).json(newComment);
    } catch (err) {
        res.status(500).json({ message: "Error creating new comment" });
    }
};

// @desc Updates comment
// @route PATCH /comments/:id
// @access Private
const updateComment = async (req, res) => {
    const { userId } = req;
    const { id } = req.params;
    const { content } = req.body;
    try {
        const foundComment = await Comment.findById(id);

        //check if comment exists
        if (!foundComment) {
            return res.status(400).json({ message: "Comment not found" });
        }

        //check if authenticated user is author
        if (!foundComment.authorId.equals(userId)) {
            return res.status(403).json({ message: "Id of authenticated user doesnt match id of comment author" })
        }

        foundComment.content = content;
        const updatedComment = await foundComment.save();

        if (updatedComment) {
            res.status(200).json(updatedComment);
        } else {
            res.status(404).json({ message: "Comment not found" });
        }
    } catch (err) {
        res.status(500).json({ message: "Error updating comment" });
    }
};

// @desc Deletes comment
// @route DELETE /comments/:id
// @access Private
const deleteComment = async (req, res) => {
    const { userId } = req;
    const { id } = req.params;
    try {
        const foundComment = await Comment.findById(id);

        //check if comment exists
        if (!foundComment) {
            return res.status(400).json({ message: "Comment not found" });
        }

        //check if authenticated user is author
        if (!foundComment.authorId.equals(userId)) {
            return res.status(403).json({ message: "Id of authenticated user doesnt match id of comment author" })
        }

        const deletedComment = await foundComment.deleteOne();

        if (deletedComment) {
            res.status(200).json({ message: "Comment deleted successfully" });
        } else {
            res.status(404).json({ message: "Comment not deleted because it was not found" });
        }
    } catch (err) {
        res.status(500).json({ message: "Error deleting comment" });
    }
};

// @desc check if user liked comment
// @route GET /comments/:id/like
// @access Private
const getUserLikedComment = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.query;
    try {
        const like = await CommentLike.findOne({ commentId: id, userId });
        res.status(200).json({ hasLiked: !!like });
    } catch (err) {
        res.status(500).json({ message: "Error retrieving has user liked comment" });
    }
};

// @desc adds like to comment with id
// @route POST /comments/:id/like
// @access Private
const addLike = async (req, res) => {
    const { userId } = req;
    const { id } = req.params;
    try {
        const foundComment = await Comment.findById(id);

        //check if comment exists
        if (!foundComment) {
            return res.status(400).json({ message: "Comment not found" });
        }

        //check if authenticated user is author
        if (foundComment.authorId.equals(userId)) {
            return res.status(403).json({ message: "User cannot like their own comments" })
        }

        //check if comment is already liked
        const foundLike = await CommentLike.findOne({ commentId: id, userId });
        if (foundLike) {
            return res.status(400).json({ message: "Comment is already liked" });
        }

        //create like in database
        await CommentLike.create({ commentId: id, userId });
        //increment the likesCount of comment
        foundComment.likesCount += 1;
        //save the updated document
        await foundComment.save();
        res.status(201).json({ message: "Like added" });
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Error adding like" });
    }
};

// @desc delete like to comment with id
// @route DELETE /comments/:id/like
// @access Private
const deleteLike = async (req, res) => {
    const { userId } = req;
    const { id } = req.params;
    try {
        const foundComment = await Comment.findById(id);

        //check if comment exists
        if (!foundComment) {
            return res.status(400).json({ message: "Comment not found" });
        }

        const foundLike = await CommentLike.findOne({ commentId: id, userId });
        //check if comment is liked
        if (!foundLike) {
            return res.status(400).json({ message: "Like not found" });
        }

        const deletedLike = await foundLike.deleteOne();
        //check if like got deleted
        if (!deletedLike) {
            return res.status(404).json({ message: "Like not deleted because it was not found" });
        }

        //only decrease likeCount by 1 if likeCount is bigger than 0
        if (foundComment.likesCount > 0) {
            foundComment.likesCount -= 1;
        }

        await foundComment.save()
        res.status(200).json({ message: "Like removed" });
    } catch (err) {
        res.status(500).json({ message: "Error removing like" });
    }
};

export {
    getComments,
    getCommentById,
    createComment,
    updateComment,
    deleteComment,
    getUserLikedComment,
    addLike,
    deleteLike,
}