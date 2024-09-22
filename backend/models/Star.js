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
    }
);

starSchema.index({ buildId: 1 });
starSchema.index({ userId: 1 });
starSchema.index({ buildId: 1, userId: 1 }, { unique: true });

export default mongoose.model("Star", starSchema);