import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import ProfileImg from "../../Images/Profile_Cover.jpg";

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("favourites");
  const [profilePic, setProfilePic] = useState(null);
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    const fetchWishlist = async () => {
      if (!userId) return;

      try {
        setLoading(true);
        const res = await axios.get(`/api/v1/users/getAllFavourites/${userId}`);
        setWishlist(res.data.favorites || []);
      } catch (err) {
        setError("Error fetching wishlist");
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, [userId]);

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return;

      try {
        setLoading(true);
        const res = await axios.get(`/api/v1/users/userDetails/${userId}`);
        setUser(res.data);
      } catch (err) {
        setError("Error fetching user details");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!userId) return;

      try {
        setLoading(true);
        const res = await axios.get(`/api/v1/users/bookingDetails/${userId}`);
        setBookings(res.data.bookings || []);
      } catch (err) {
        setError("Error fetching bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [userId]);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("userId");
    setUser(null);
    navigate("/");
    toast.success("Logged out successfully");
  };

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Cover Image */}
        <div className="relative w-full h-48 sm:h-60">
          <img
            src={ProfileImg}
            alt="Cover"
            className="w-full h-full object-cover rounded-t-xl"
            loading="lazy"
          />
        </div>

        {/* Profile Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-white shadow-sm rounded-b-xl">
          <div className="flex items-center space-x-4">
            <label htmlFor="profile-upload" className="cursor-pointer">
              <div className="w-20 h-20 border-4 border-white rounded-full overflow-hidden flex items-center justify-center bg-gray-200 shadow-lg hover:shadow-xl transition-all">
                {profilePic ? (
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaUser className="text-3xl text-gray-600" />
                )}
              </div>
              <input
                type="file"
                id="profile-upload"
                accept="image/*"
                className="hidden"
                onChange={handleProfilePicChange}
              />
            </label>
            <div>
              <h2 className="text-2xl font-semibold capitalize">
                {user?.fullName || "User"}
              </h2>
              <p className="text-sm text-gray-600">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center mt-4 sm:mt-0 px-4 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded text-sm transition-colors"
          >
            <FiLogOut className="mr-2" /> Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex justify-around border-b pb-3 text-gray-600">
          {[
            { id: "favourites", label: `My Wishlist (${wishlist.length})` },
            { id: "history", label: `Booking History (${bookings.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 font-semibold rounded-md ${
                activeTab === tab.id
                  ? "bg-orange-500 text-white"
                  : "hover:bg-gray-100"
              } transition-all`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Wishlist */}
          {activeTab === "favourites" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {wishlist.length > 0 ? (
                wishlist.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                  >
                    <img
                      src={
                        item.tour.image ||
                        `https://source.unsplash.com/400x250/?travel,${item.title}`
                      }
                      alt={item.tour.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold truncate">
                        {item.tour.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {item.tour.description}
                      </p>
                      <div className="flex justify-between pt-2">
                        <span className="font-bold text-black">
                          ₹{item.tour.price}
                        </span>
                        <span className="text-yellow-500">⭐ 4.5</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-full text-gray-600">
                  No favourites added yet.
                </p>
              )}
            </div>
          )}

          {/* Bookings - Horizontal Scroll */}
          {activeTab === "history" && (
            <div className="max-w-screen-xl mx-auto py-6 overflow-x-auto">
              <div className="flex space-x-6 w-max">
                {bookings.length > 0 ? (
                  bookings.map((booking) => (
                    <div
                      key={booking._id}
                      className="flex-none w-80 bg-white rounded-xl border-2 border-dashed border-gray-300 shadow-lg overflow-hidden"
                    >
                      {/* Top Section: Tour Info */}
                      <div className="flex items-center p-4 space-x-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
                        <div className="h-20 w-20 rounded-md overflow-hidden bg-white shadow-inner">
                          <img
                            src={
                              booking.tourImage || "/path/to/default-image.jpg"
                            }
                            alt={booking.tourTitle}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold">
                            {booking.tourTitle}
                          </h3>
                          <p className="text-sm opacity-80">
                            {booking.tourDescription?.slice(0, 60)}...
                          </p>
                        </div>
                      </div>

                      {/* Middle Section: Details */}
                      <div className="grid grid-cols-2 gap-4 p-4 text-sm text-gray-800">
                        <div>
                          <p className="font-semibold">Name</p>
                          <p>{booking.name}</p>
                        </div>
                        <div>
                          <p className="font-semibold">Email</p>
                          <p>{booking.email}</p>
                        </div>
                        <div>
                          <p className="font-semibold">Phone</p>
                          <p>{booking.phone}</p>
                        </div>
                        <div>
                          <p className="font-semibold">From</p>
                          <p>{booking.travelDateFrom}</p>
                        </div>
                        <div>
                          <p className="font-semibold">To</p>
                          <p>{booking.travelDateTo}</p>
                        </div>
                        <div>
                          <p className="font-semibold">Price</p>
                          <p>₹{booking.tourPrice}</p>
                        </div>
                      </div>

                      {/* Bottom Section: Actions */}
                      <div className="flex items-center justify-between px-4 py-3 bg-gray-50">
                        <span className="text-xs text-gray-400">
                          Booking ID: {booking._id}
                        </span>
                        <Link
                          to={"/ratnagiri"}
                          className="text-sm px-4 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-600 w-full">
                    No booking history available.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
