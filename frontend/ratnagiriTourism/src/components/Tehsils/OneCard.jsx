import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

const OneCard = ({ title, image, description, price }) => {
  // Function to handle booking
  const handleBooking = async () => {
    const userId = sessionStorage.getItem("userId"); // Replace this with actual user ID logic

    if (!userId) {
      alert("User not logged in!");
      return;
    }

    const bookingData = {
      title,        
      description,  
      price,        
      userId        
    };

    try {
      const response = await axios.post("/api/v1/users/bookTour", bookingData);
      toast.success("Booking Successfull")
    } catch (error) {
      console.error("Booking error:", error);
      alert("Failed to book the tour. Please try again.");
    }
  };

  return (
    <div className="rounded-lg bg-slate-200 overflow-hidden shadow-lg flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-56 sm:h-72 object-cover"
      />
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-lg font-semibold text-green-600">₹{price}</p>
      </div>
      <div className="p-4">
        <button
          onClick={handleBooking}
          className="w-full bg-blue-500 text-white font-semibold p-2 rounded-lg hover:bg-blue-600"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default OneCard;
