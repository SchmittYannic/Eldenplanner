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
        unique: true,
    }
);

export default mongoose.model("CommentLike", commentLikeSchema);