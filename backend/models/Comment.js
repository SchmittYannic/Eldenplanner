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
        totalReplies: {
            type: Number,
            default: 0,
            validate: {
                validator: function (value) {
                    return value >= 0;
                },
                message: "totalReplies cannot be negative"
            }
        },
        likes: {
            type: Number,
            default: 0,
            validate: {
                validator: function (value) {
                    return value >= 0;
                },
                message: "likes cannot be negative"
            }
        },
        dislikes: {
            type: Number,
            default: 0,
            validate: {
                validator: function (value) {
                    return value >= 0;
                },
                message: "dislikes cannot be negative"
            }
        },
    },
    {
        timestamps: true
    }
);

commentSchema.index({ targetId: 1, targetType: 1 });
commentSchema.index({ parentId: 1 });
commentSchema.index({ authorId: 1 });
commentSchema.index({ createdAt: 1 });

export default mongoose.model("Comment", commentSchema);