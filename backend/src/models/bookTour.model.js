import mongoose from "mongoose";

const bookingTourSchema = new mongoose.Schema(
  {
    tourTitle: {
      type: String,
      required: true,
    },
    tourId: {
      type: String,
      required: true,
    },
    tourDescription: {
      type: String,
      required: true,
    },
    tourPrice: {
      type: Number,
      required: true,
    },
    tourImage: {
      type: String,
      required: true,
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
    cardNumber: {
      type: String,
    },
    expiryDate: {
      type: String,
    },
    cvv: {
      type: String,
    },
  },
  { timestamps: true }
);

export const BookingTour = mongoose.model("BookingTour", bookingTourSchema);
