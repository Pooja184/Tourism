import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    name:{
        type:String,
        required:true,
    },
    email:{
      type:String,
      unique:true,
      lowercase:true,
      trim:true,
     },
    // tourId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Tour",
    //   required: true,
    // },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
    },
    attractionVisited: {
      type: String,
    },
    suggestions: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Review = mongoose.model("Review", reviewSchema);
