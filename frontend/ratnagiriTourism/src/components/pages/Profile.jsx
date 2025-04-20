import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
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

  const [showModal, setShowModal] = useState(false);
  const [bookingToCancel, setBookingToCancel] = useState(null);

  const userId = sessionStorage.getItem("userId");

  const handleWishlist = async (experience) => {
    try {
      const res = await axios.post("/api/v1/users/favourites", {
        userId,
        tour: experience,
      });

      // Updating the wishlist state with the new wishlist items from the backend
      const updatedTitles = res.data.wishlist.map((item) => item.tour.title);
      setWishlist(updatedTitles); // Update the state with the new wishlist
      localStorage.setItem("wishlist", JSON.stringify(updatedTitles)); // Update localStorage
      localStorage.setItem("wishlistToast", "success"); // Store a flag for the success toast
      window.location.reload(); // Reload the page
      toast.success(res.data.message); // Display success toast message
    } catch (error) {
      console.error("Wishlist toggle error:", error.message);
    }
  };

  // Check for the toast flag on page load
  useEffect(() => {
    if (localStorage.getItem("wishlistToast") === "success") {
      toast.success("Removed from Wishlist!"); // Show the toast message
      localStorage.removeItem("wishlistToast"); // Remove the toast flag after showing the toast
    }
  }, []);

  useEffect(() => {
    const fetchWishlist = async () => {
      if (!userId) return;
      try {
        const res = await axios.get(`/api/v1/users/getAllFavourites/${userId}`);
        setWishlist(res.data.favorites || []);
      } catch (err) {
        console.error("Error fetching wishlist:", err);
      }
    };
    fetchWishlist();
  }, [userId]);

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return;
      try {
        const res = await axios.get(`/api/v1/users/userDetails/${userId}`);
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching user details:", err);
        setError("Failed to load profile details.");
      }
    };
    fetchUser();
  }, [userId]);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!userId) return;
      try {
        const res = await axios.get(`/api/v1/users/bookingDetails/${userId}`);
        setBookings(res.data.bookings || []);
      } catch (err) {
        console.error("Error fetching bookings:", err);
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
    localStorage.removeItem("wishlist");
    setUser(null);
    navigate("/");
    window.location.reload();
    toast.success("Logged out successfully");
  };

  const handleCancelBooking = async () => {
    if (!bookingToCancel) return;
    try {
      await axios.delete(`/api/v1/users/deleteBooking/${bookingToCancel}`);
      setBookings((prev) => prev.filter((b) => b._id !== bookingToCancel));
      toast.success("Booking cancelled successfully!");
    } catch (err) {
      console.error("Error cancelling booking:", err);
      toast.error("Failed to cancel booking");
    } finally {
      setShowModal(false);
      setBookingToCancel(null);
    }
  };

  const tourTitleToPath = {
    "A Taste of Konkan: Ratnagiri": "/ratnagiri",
    "Ratnagiri & Historical Forts Tour": "/mandangad",
    "Ratnagiri Beachside Bliss": "/guhagar",
    "Konkan Vibes: Ratnagiri Expedition": "/khed",
    "Ratnagiri Adventure Retreat": "/chiplun",
    "Heritage and Beaches of Ratnagiri": "/dapoli",
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Cover */}
        <div className="relative w-full h-48 sm:h-60">
          <img
            src={ProfileImg}
            alt="Cover"
            className="w-full h-full object-cover rounded-t-xl"
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
            { id: "history", label: `My Bookings (${bookings.length})` },
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

        {error && <div className="text-center text-red-500 py-4">{error}</div>}

        {/* Tabs Content */}
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
                      {/* Explore Button */}
                      <div className="pt-3 flex justify-between items-center gap-2">
                        {/* Explore Button */}
                        <Link
                          to={tourTitleToPath[item.tour.title] || "/not-found"}
                          className="flex-1 px-4 py-2 text-center font-medium bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all text-sm"
                        >
                          Explore
                        </Link>

                        {/* Delete Icon Button */}
                        <button
                          onClick={() => handleWishlist(item.tour)} // Replace with your function
                          className="p-2 rounded-full bg-red-100 hover:bg-red-200 transition"
                          title="Remove from wishlist"
                        >
                          <MdDelete className="text-black text-xl" />
                        </button>
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

          {/* Booking History */}
          {activeTab === "history" && (
            <div className="max-w-screen-xl mx-auto py-6 overflow-x-auto">
              <div className="flex space-x-6 w-max">
                {bookings.length > 0 ? (
                  bookings.map((booking) => (
                    <div
                      key={booking._id}
                      className="flex-none w-80 bg-white rounded-xl border-2 border-dashed border-gray-300 shadow-lg overflow-hidden"
                    >
                      <div className="flex items-center p-4 space-x-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
                        <div className="h-20 w-20 rounded-md overflow-hidden bg-white">
                          <img
                            src={booking.tourImage || "/default-image.jpg"}
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
                      <div className="flex items-center justify-between px-4 py-3 bg-gray-50">
                        <span
                          className="text-xs text-gray-400 truncate"
                          style={{ maxWidth: "150px" }}
                        >
                          Booking ID: {booking._id}
                        </span>
                        <div className="flex gap-2">
                          <Link
                            to={
                              tourTitleToPath[booking.tourTitle] || "/not-found"
                            }
                            className="text-sm px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
                          >
                            Details
                          </Link>
                          <button
                            onClick={() => {
                              setShowModal(true);
                              setBookingToCancel(booking._id);
                            }}
                            className="text-sm px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all"
                          >
                            Cancel
                          </button>
                        </div>
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

      {/* Cancel Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-8 text-center space-y-6 animate-fade-in">
            <div className="text-red-600 text-4xl">⚠️</div>
            <h3 className="text-xl font-bold text-gray-800">Cancel Booking?</h3>
            <p className="text-gray-600">
              Are you sure you want to cancel this booking? This action cannot
              be undone.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleCancelBooking}
                className="px-5 py-2.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all font-medium"
              >
                Yes, Cancel
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2.5 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-all font-medium"
              >
                No, Keep
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
