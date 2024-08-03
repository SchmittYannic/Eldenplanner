import mongoose from "mongoose";

const resetPasswordTokenSchema = new mongoose.Schema(
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
        tokenIssuedAt: {
            type: Date,
            default: Date.now,
            expires: parseInt(process.env.EXPIRATION_RESET_TOKEN), //in seconds
        },
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Resetpasswordtokens", resetPasswordTokenSchema);