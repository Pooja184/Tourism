import React from "react";
import { Link } from "react-router-dom";
import RatnagiriMap from "../../Images/Ratnagiri_Map.jpg";

const Contact= () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-orange-50 to-orange-100 p-6">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 flex justify-center p-4">
        <Link to="/tehsils">
          <img
            src={RatnagiriMap}
            alt="Ratnagiri Map"
            className="w-full max-w-xl rounded-lg shadow-2xl transform transition duration-500 hover:scale-125"
          />
        </Link>
      </div>

      {/* Right Side - Contact Form */}
      <div className="w-full lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg">
        {/* Heading with Emoji */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <h2 className="text-4xl font-bold text-gray-800">Contact Us💬</h2>
        </div>

        <p className="text-center text-gray-600 mb-6">
          We will get back to you as soon as possible!
        </p>

        {/* Form */}
        <form action="#" className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
            required
          />

          <textarea
            placeholder="Your Message"
            className="border border-gray-300 p-3 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-black transition"
            required
          ></textarea>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-32 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
            >
              Send Message 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;