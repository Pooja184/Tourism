import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import QRCode from "../../Images/QRCode.jpg"

const BookingForm = () => {
  const [searchParams] = useSearchParams();
  const tourTitle = searchParams.get("title");

  const [formData, setFormData] = useState({
    
    userId:sessionStorage.getItem("userId"),
    tourTitle,
    name: "",
    email: "",
    phone: "",
    travelDateFrom: "",
    travelDateTo: "",
    paymentMethod: "creditCard",
    // cardNumber: "",
    // expiryDate: "",
    // cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
    try {
      const response=await fetch("api/v1/users/storetour",{
        method:"POST",
        headers:{
          "content-type":"application/json" 
        },
        body:JSON.stringify(formData)
      })
      if(response.ok){
        alert("Plan Submmited successfully")
      }
    } catch (error) {
      console.log(error)
    }
    // alert("Booking Confirmed!🏝✈");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 to-orange-300 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
        📍 Book Your Tour
        </h2>

        <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium">Tour Name</label>
            <input
              type="text"
              value={tourTitle || ""}
              name="tourName"
              readOnly
              className="w-full px-4 py-3 border rounded-lg bg-gray-200 text-gray-800 font-semibold"
            />
          </div>

          {/* <div>
            <label className="block text-gray-700 font-medium">Travel Date (From)</label>
            <input
              type="date"
              name="travelDateFrom"
              value={formData.travelDateFrom}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Travel Date (To)</label>
            <input
              type="date"
              name="travelDateTo"
              value={formData.travelDateTo}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div> */}

          <div>
            <label className="block text-gray-700 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Travel Date (From)
            </label>
            <input
              type="date"
              name="travelDateFrom"
              value={formData.travelDateFrom}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Travel Date (To)
            </label>
            <input
              type="date"
              name="travelDateTo"
              value={formData.travelDateTo}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Payment Method
            </label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="creditCard">Credit Card</option>
              <option value="upi">UPI</option>
            </select>
          </div>

          {formData.paymentMethod === "creditCard" && (
            <div>
              <label className="block text-gray-700 font-medium">
                Card Details
              </label>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mt-2"
              />
              <input
                type="text"
                name="expiryDate"
                placeholder="Expiry Date (MM/YY)"
                value={formData.expiryDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mt-2"
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mt-2"
              />
            </div>
          )}

          {formData.paymentMethod === "upi" && (
            <div className="flex flex-col items-center">
              <label className="block text-gray-700 font-medium">
                Scan QR Code
              </label>
              <img
                src={QRCode}//QR Code
                alt="UPI QR Code"
                className="w-40 h-40 mt-2"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-all shadow-md"
          >
            Book Now 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;