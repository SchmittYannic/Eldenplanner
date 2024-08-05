import mongoose from "mongoose";

const commentLikeSchema = new mongoose.Schema(
    {
        commentId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Comment",
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
    },
    {
        timestamps: true,
        unique: true,
    }
);

export default mongoose.model("CommentLike", commentLikeSchema);