import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        tourId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tour",
            required: true
        },
        addedAt: {
            type: Date,
            default: Date.now
        }
    },
    { timestamps: true }
);

export const Favorite = mongoose.model("Favorite", favoriteSchema);
