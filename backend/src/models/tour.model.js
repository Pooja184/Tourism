import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        // location: {
        //     type: String,
        //     required: true
        // },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        duration: {
            type: String,
            required: true
        },
        // image: {
        //     type: String, // URL or file path
        //     required: true
        // },
        // category: {
        //     type: String,
        //     enum: ["beach", "mountain", "temple", "adventure", "serenity", "spirituality"],
        //     required: true
        // },
        rating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5
        },
        // reviews: [
        //     {
        //         userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        //         comment: String,
        //         rating: { type: Number, min: 0, max: 5 },
        //         createdAt: { type: Date, default: Date.now }
        //     }
        // ]
    },
    { timestamps: true }
);

export const Tour = mongoose.model("Tour", tourSchema);
