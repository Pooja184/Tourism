import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import QRCode from "../../Images/QRCode.jpg";

const BookingForm = () => {
  const [searchParams] = useSearchParams();

  const tourTitle = searchParams.get("title");
  const tourId = searchParams.get("id");
  const tourDescription = searchParams.get("description");
  const tourPrice = searchParams.get("price");
  const tourImage = searchParams.get("image");

  const [formData, setFormData] = useState({
    userId: sessionStorage.getItem("userId"),
    tourTitle,
    tourId,
    tourDescription,
    tourPrice,
    tourImage,
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
    } catch (error) {
      console.error("Booking Error:", error);
      toast.error("An error occurred.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-center">
      <div className="bg-white w-full max-w-4xl shadow-2xl rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          🧾 Travel Booking Gateway
        </h2>

        {/* Tour Overview */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <img
              src={tourImage || "/default.jpg"}
              alt={tourTitle}
              className="rounded-lg w-full h-60 object-cover shadow"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {tourTitle}
            </h3>
            <p className="text-gray-600 mb-4">{tourDescription}</p>
            <p className="text-xl text-black font-bold">₹{tourPrice}/-</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
          {/* Personal Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">
              👤 Personal Information
            </h4>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:outline-none"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:outline-none"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                name="travelDateFrom"
                value={formData.travelDateFrom}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:outline-none"
              />
              <input
                type="date"
                name="travelDateTo"
                value={formData.travelDateTo}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Payment Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">
              💳 Payment Method
            </h4>

            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:outline-none"
            >
              <option value="creditCard">Credit / Debit Card</option>
              <option value="upi">UPI / QR Code</option>
            </select>

            {formData.paymentMethod === "creditCard" && (
              <div className="bg-gray-50 border rounded-lg p-4 shadow">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 mb-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:outline-none"
                />
                <div className="flex gap-3">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {formData.paymentMethod === "upi" && (
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">
                  Scan this QR Code with your UPI App
                </p>
                <img
                  src={QRCode}
                  alt="UPI QR"
                  className="w-40 h-40 mx-auto rounded-lg shadow"
                />
              </div>
            )}
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3 rounded-lg shadow-md transition duration-300"
            >
              🧳 Confirm & Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
