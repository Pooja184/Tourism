import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

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
        console.log(res.data,"getUserapi")
      } catch (err) {
        console.error("Error fetching user:", err.response?.data?.message || err.message);
      }
    };

    fetchUser();
  }, [userId]);

  const handleLogout = () => {
    sessionStorage.removeItem("userId"); // Clear session
    setUser(null); // Update state
    navigate("/"); // Redirect to home
    toast.success("Logout succesfully")
  };

  const handlePlanYourStay = () => {
    if (userId) {
      navigate("/bookHotels");
    } else {
      navigate("/login");
      console.log("/login")
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-gray-900 font-serif">
      <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <span className="text-2xl text-white first-letter:text-orange-500 first-letter:text-4xl">
              Ratnagiri Tourism
            </span>
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                <Link to="/home" className="text-gray-300 hover:text-white">Home</Link>
                <Link to="/tehsils" className="text-gray-300 hover:text-white">Tehsils</Link>
                <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
                <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
                <Link to="/review" className="text-gray-300 hover:text-white">Review</Link>
                <Link to="/profile" className="text-gray-300 hover:text-white">Profile</Link>


                <button
                  onClick={handlePlanYourStay }
                  className="block rounded-md bg-orange-600 px-3 py-2 text-base font-medium text-white hover:bg-orange-700"
                >
                  Plan your stay
                </button>

                {user ? (
                  <>
                    <span className="text-white">{user.fullName}</span>
                    <button
                      onClick={handleLogout}
                      className="bg-orange-600 px-3 py-2 text-white rounded-md hover:bg-orange-700"
                    >
                      Log Out
                    </button>
                  </>
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
          </div>
        </div>
      </nav >
    </div >
  );
};

export default Navbar;
