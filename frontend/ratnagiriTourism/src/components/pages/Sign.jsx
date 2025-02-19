import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";

export default function Sign() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("/api/v1/users/register", formData)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    alert("Registration Successful! 🎉");
    navigate("/login"); // Redirect to login after successful sign-up
  }

  return (
    <div className="flex items-center font-serif justify-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-xl border border-gray-300 sm:p-10">
        <h2 className="text-2xl font-extrabold text-center text-indigo-700 uppercase">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="flex items-center space-x-2 text-sm font-semibold text-black uppercase">
              <FaUser />
              <span>Full Name</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-2 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="flex items-center space-x-2 text-sm font-semibold text-black uppercase">
              <FaEnvelope />
              <span>Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-2 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="flex items-center space-x-2 text-sm font-semibold text-black uppercase">
              <FaLock />
              <span>Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-2 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 transition duration-300 shadow-lg"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/logIn" className="text-indigo-500 font-semibold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
