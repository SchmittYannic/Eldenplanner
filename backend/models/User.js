import mongoose from "mongoose";
import avatarUrlLookup from "../config/avatarUrlLookup.js";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        avatarUrl: {
            type: String,
            default: avatarUrlLookup["a"],
        },
        roles: {
            type: [String],
            default: ["User"],
        },
        active: {
            type: Boolean,
            default: true,
        },
        validated: {
            type: Boolean,
            default: false,
        },
        totalComments: {
            type: Number,
            default: 0,
            validate: {
                validator: function (value) {
                    return value >= 0;
                },
                message: "totalComments cannot be negative"
            }
        },
        totalStarsGiven: {
            type: Number,
            default: 0,
            validate: {
                validator: function (value) {
                    return value >= 0;
                },
                message: "totalStarsGiven cannot be negative"
            }
        },
        modifiedUserInfoAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", function (next) {
    // If the document is new (i.e. being created), set modifiedUserInfoAt to createdAt
    if (this.isNew) {
        this.modifiedUserInfoAt = this.createdAt;
    }
    next();
});

export default mongoose.model("User", userSchema);