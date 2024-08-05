import Comment from "../models/Comment.js";

// @desc Get comments
// @route GET /comments
// @access Public
const getComments = async (req, res) => {
    const { targetId, targetType, parentId } = req.query;
    try {
        const filter = { targetId, targetType };
        if (parentId) filter.parentId = parentId;
        const comments = await Comment.find(filter).sort({ createdAt: -1 });
        res.status(200).json(comments);
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
    const { authorId, content, targetId, targetType, parentId } = req.body;
    try {
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
    const { id } = req.params;
    const updateData = req.body;
    try {
        const updatedComment = await Comment.findByIdAndUpdate(id, updateData, { new: true });
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
    const { id } = req.params;
    try {
        const deletedComment = await Comment.findByIdAndDelete(id);
        if (deletedComment) {
            res.status(200).json({ message: "Comment deleted successfully" });
        } else {
            res.status(404).json({ message: "Comment not found" });
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
    const { id } = req.params;
    const { userId } = req.body;
    try {
        await CommentLike.create({ commentId: id, userId });
        await Comment.findByIdAndUpdate(id, { $inc: { likesCount: 1 } });
        res.status(201).json({ message: "Like added" });
    } catch (err) {
        res.status(500).json({ message: "Error adding like" });
    }
};

// @desc delete like to comment with id
// @route DELETE /comments/:id/like
// @access Private
const deleteLike = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;
    try {
        await CommentLike.findOneAndDelete({ commentId: id, userId });
        await Comment.findByIdAndUpdate(id, { $inc: { likesCount: -1 } });
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