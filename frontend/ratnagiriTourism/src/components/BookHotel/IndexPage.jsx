import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HotelHomePage from "../../Images/BookHotel/Bg_img.jpg";
import Logo from "../../Images/RT.jpeg";  // Importing the logo

const IndexPage = () => {
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      navigate("/"); 
    }
  }, [userId, navigate]);

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img 
        src={HotelHomePage} 
        alt="Background" 
        className="w-full h-full object-cover"
      />

      {/* Navbar Overlay */}
      <div className="absolute top-0 left-0 w-full h-16 flex items-center justify-between px-10 text-black bg-white/70 backdrop-blur-sm shadow-md">
        {/* Logo */}
        <img src={Logo} alt="Ratnagiri Logo" className="h-12 w-12 object-cover rounded-full" />

        {/* Navbar Links */}
        <div className="flex gap-6">
          <Link to="/register" className="capitalize hover:text-gray-500 transition">
            Registration
          </Link>
          <Link to="/login" className="capitalize hover:text-gray-500 transition">
            Log In
          </Link>
          <Link to="/home" className="capitalize hover:text-gray-500 transition">
            Go to Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
