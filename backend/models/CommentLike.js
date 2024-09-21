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
        type: {
            type: String,
            enum: ["like", "dislike"],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

commentLikeSchema.index({ commentId: 1 });
commentLikeSchema.index({ userId: 1, commentId: 1, type: 1 }, { unique: 1 });
commentLikeSchema.index({ userId: 1 });

export default mongoose.model("CommentLike", commentLikeSchema);