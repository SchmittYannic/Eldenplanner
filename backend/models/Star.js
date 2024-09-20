import mongoose from "mongoose";

const starSchema = new mongoose.Schema(
    {
        buildId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Build",
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

export default mongoose.model("Star", starSchema);