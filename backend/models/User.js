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
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("User", userSchema);