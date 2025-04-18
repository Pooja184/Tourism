import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const BookingForm = ({ isOpen, onClose, tour }) => {
  const [formData, setFormData] = useState({
    userId: sessionStorage.getItem("userId"),
    tourTitle: tour.title,
    tourId: tour.id,
    tourDescription: tour.description,
    tourPrice: tour.price,
    tourImage: tour.image,
    name: "",
    email: "",
    phone: "",
    travelDateFrom: "",
    travelDateTo: "",
    paymentMethod: "creditCard",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/users/storetour", formData, {
        headers: { "Content-Type": "application/json" },
      });
      response.status === 201
        ? toast.success("Booking Successful!")
        : toast.error("Booking Failed");
      onClose();
    } catch (error) {
      console.error("Booking Error:", error);
      toast.error("An error occurred.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-2 py-6">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-xl p-6 relative overflow-hidden">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          🧾 Travel Booking
        </h2>

        {/* Tour Summary */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <img
            src={tour.image || "/default.jpg"}
            alt={tour.title}
            className="rounded-lg w-full h-48 object-cover shadow"
          />
          <div className="text-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {tour.title}
            </h3>
            <p className="text-gray-600 mb-2 line-clamp-3">
              {tour.description}
            </p>
            <p className="text-lg text-black font-bold">₹{tour.price}/-</p>
          </div>
        </div>

        {/* Booking Form */}
        <form
          onSubmit={handleSubmit}
          className="grid sm:grid-cols-2 gap-4 text-sm"
        >
          {/* Personal Info */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-700">👤 Personal Info</h4>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
            <div className="flex gap-2">
              <input
                type="date"
                name="travelDateFrom"
                value={formData.travelDateFrom}
                onChange={handleChange}
                required
                className="w-1/2 px-3 py-2 border rounded-md"
              />
              <input
                type="date"
                name="travelDateTo"
                value={formData.travelDateTo}
                onChange={handleChange}
                required
                className="w-1/2 px-3 py-2 border rounded-md"
              />
            </div>
          </div>

          {/* Payment Info */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-700">💳 Payment</h4>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="creditCard">Credit / Debit Card</option>
              <option value="upi">UPI / QR Code</option>
            </select>

            {formData.paymentMethod === "creditCard" ? (
              <>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                    className="w-1/2 px-3 py-2 border rounded-md"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    className="w-1/2 px-3 py-2 border rounded-md"
                  />
                </div>
              </>
            ) : (
              <div className="p-3 border rounded-md bg-gray-50 text-center">
                <p className="text-sm text-gray-700 mb-2">Scan QR to Pay</p>
                <img src="/QRCode.jpg" alt="QR Code" className="w-24 mx-auto" />
              </div>
            )}
          </div>
        </form>

        {/* Submit and Cancel Buttons */}
        <div className="mt-6 flex gap-4">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white text-sm font-medium px-6 py-2 rounded-md w-1/2"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-green-700 hover:bg-green-600 text-white text-sm font-medium px-6 py-2 rounded-md w-1/2"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
