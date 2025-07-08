import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiMenu, FiX } from "react-icons/fi";
import { HiUserCircle } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return;
      try {
        const res = await axios.get(`/api/v1/users/userDetails/${userId}`);
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching user:", err.response?.data?.message || err.message);
      }
    };
    fetchUser();
  }, [userId]);

  const handleLogout = () => {
    sessionStorage.removeItem("userId");
    setUser(null);
    navigate("/");
    toast.success("Logout successfully");
  };

  const handlePlanYourStay = () => {
    if (userId) {
      navigate("/bookTour");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="w-full bg-gray-900 text-white sticky top-0 z-50 shadow-md font-serif">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold tracking-wide">
            <span className="text-orange-500 text-3xl">R</span>atnagiri Tourism
          </Link>

          {/* Hamburger Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl focus:outline-none"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-4 text-base">
            <Link to="/home" className="hover:text-orange-400 transition">Home</Link>
            <Link to="/tehsils" className="hover:text-orange-400 transition">Tehsils</Link>
            <Link to="/about" className="hover:text-orange-400 transition">About Us</Link>
            <Link to="/contact" className="hover:text-orange-400 transition">Contact</Link>
            <Link to="/review" className="hover:text-orange-400 transition">Review</Link>

            <button
              onClick={handlePlanYourStay}
              className="bg-orange-600 hover:bg-orange-700 px-3 py-2 rounded-md text-white font-medium"
            >
              Book Tour
            </button>

            {user ? (
              <Link
                to="/profile"
                className="flex items-center gap-2 text-white font-semibold hover:underline"
              >
                <HiUserCircle className="text-3xl" />
                {user?.fullName}
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-orange-600 hover:bg-orange-700 px-3 py-2 rounded-md text-white"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2 bg-gray-800">
          <Link to="/home" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-white">Home</Link>
          <Link to="/tehsils" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-white">Tehsils</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-white">About Us</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-white">Contact</Link>
          <Link to="/review" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-white">Review</Link>

          <button
            onClick={() => {
              setMenuOpen(false);
              handlePlanYourStay();
            }}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md"
          >
            Book Tour
          </button>

          {user ? (
            <Link
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-white mt-2"
            >
              <HiUserCircle className="text-3xl" />
              {user?.fullName}
            </Link>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="w-full block text-center bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md mt-2"
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
