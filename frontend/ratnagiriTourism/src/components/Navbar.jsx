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
        console.log(res.data, "getUserapi");
      } catch (err) {
        console.error(
          "Error fetching user:",
          err.response?.data?.message || err.message
        );
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
      console.log("/login");
    }
  };

  return (
    <div>
      <nav className="w-full px-4 sm:px-6 bg-gray-900 font-serif sticky top-0 z-50">
        <div className="flex h-16 items-center justify-between">
          <span className="text-2xl text-white first-letter:text-orange-500 first-letter:text-4xl">
            Ratnagiri Tourism
          </span>

          {/* Hamburger menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl focus:outline-none"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Menu for large screens */}
          <div className="hidden sm:flex space-x-4">
            <Link to="/home" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/tehsils" className="text-gray-300 hover:text-white">
              Tehsils
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
            <Link to="/review" className="text-gray-300 hover:text-white">
              Review
            </Link>

            <button
              onClick={handlePlanYourStay}
              className="block rounded-md bg-orange-600 px-3 py-2 text-base font-medium text-white hover:bg-orange-700"
            >
              Book Tour
            </button>

            {user ? (
              <Link
                to="/profile"
                className="flex items-center gap-2 text-white text-lg font-semibold hover:underline"
              >
                <HiUserCircle className="text-3xl" />
                <span className="">{user?.fullName}</span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-orange-600 px-3 py-2 text-white rounded-md hover:bg-orange-700"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col space-y-2 py-2">
            <Link
              to="/home"
              className="text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/tehsils"
              className="text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Tehsils
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/review"
              className="text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Review
            </Link>

            <button
              onClick={() => {
                setMenuOpen(false);
                handlePlanYourStay();
              }}
              className="rounded-md bg-orange-600 px-3 py-2 text-white hover:bg-orange-700"
            >
              Book Tour
            </button>

            {user ? (
              <Link
                to="/profile"
                className="text-white text-3xl"
                onClick={() => setMenuOpen(false)}
              >
                <HiUserCircle />
              </Link>
            ) : (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="bg-orange-600 px-3 py-2 text-white rounded-md hover:bg-orange-700"
              >
                Sign In
              </Link>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
