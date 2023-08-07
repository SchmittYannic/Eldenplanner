import mongoose from "mongoose";

const buildSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        name: {
            type: String,
            required: true,
        },
        startingclass: {
            type: String,
            required: true,
        },
        greatrune: {
            type: String,
            required: true,
        },
        greatruneactive: {
            type: Boolean,
            required: true,
        },
        vigor: {
            type: Number,
            required: true,
        },
        mind: {
            type: Number,
            required: true,
        },
        endurance: {
            type: Number,
            required: true,
        },
        strength: {
            type: Number,
            required: true,
        },
        dexterity: {
            type: Number,
            required: true,
        },
        intelligence: {
            type: Number,
            required: true,
        },
        faith: {
            type: Number,
            required: true,
        },
        arcane: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Build", buildSchema);