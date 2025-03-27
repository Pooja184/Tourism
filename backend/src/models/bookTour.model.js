import mongoose from "mongoose";

const bookingTourSchema = new mongoose.Schema(
  {
    tourTitle:{
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    travelDateFrom: {
      type: Date,
      default: Date.now,
      required: true,
    },
    travelDateTo: {
      type: Date,
      default: Date.now,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const BookingTour = mongoose.model("BookingTour", bookingTourSchema);
