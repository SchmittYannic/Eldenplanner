import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        authorId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        parentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
        targetId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        targetType: {
            type: String,
            enum: ["Build", "User"],
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        likes: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Comment", commentSchema);