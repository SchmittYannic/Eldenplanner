import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        resetPasswordToken: {
            type: String,
            default: ""
        },
    }
);

export default mongoose.model("Tokens", tokenSchema);