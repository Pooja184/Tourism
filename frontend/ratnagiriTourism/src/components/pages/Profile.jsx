import React, { useEffect, useState } from "react";
import ProfileImg from "../../Images/Profile_Cover.jpg";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const navigate=useNavigate()
  const [activeTab, setActiveTab] = useState("favourites");
  const [profilePic, setProfilePic] = useState(null);
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]); // State for bookings data
  const [loading, setLoading] = useState(true); // Loading state for data fetching

  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return;

      try {
        const res = await axios.get(`/api/v1/users/userDetails/${userId}`);
        setUser(res.data);
        console.log(res.data, "getUserapi");
      } catch (err) {
        console.error("Error fetching user:", err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");

    console.log("User ID from sessionStorage: ", userId); 

    const fetchBookings = async () => {
      if (!userId) {
        console.error("User ID is not available in sessionStorage");
        return; 
      }

      try {
        const res = await axios.get(`/api/v1/users/bookingDetails/${userId}`);
        setBookings(res.data.bookings || []);
        console.log(res.data.data,"bookingdetails")
      } catch (err) {
        console.error("Error fetching bookings:", err.response?.data?.message || err.message);
      }
    };

    fetchBookings();
  }, [userId]); // Runs when component mounts and userId changes

  // Handle Profile Picture Upload
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Handles logout
  const handleLogout = () => {
    sessionStorage.removeItem("userId"); // Clear session
    setUser(null); // Update state
    navigate("/"); // Redirect to home
    toast.success("Logout succesfully")
  };

  if (loading) {
    return <div>Loading...</div>; // Display loading indicator while data is being fetched
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Cover Photo */}
        <div className="relative w-full h-48 sm:h-60 bg-gray-300">
          <img
            src={ProfileImg}
            alt="Cover"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Profile Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6">
          <div className="flex items-center space-x-4">
            <label htmlFor="profile-upload" className="cursor-pointer">
              <div className="w-20 h-20 flex items-center justify-center text-4xl border-2 border-black rounded-full bg-gray-200 overflow-hidden">
                {profilePic ? (
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaUser className="text-gray-600" />
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
              <h2 className="text-xl capitalize font-semibold">{user?.fullName || "User"}</h2>
              {/* <p className="text-gray-500">{user?.location || "Location not available"}</p> */}
            </div>
          </div>
          {/* Edit Button */}
          <button 
          onClick={handleLogout}
          className="flex items-center bg-orange-500 text-white px-3 py-1 rounded text-sm mt-4 sm:mt-0 hover:bg-orange-600 transition-colors">
            <FiLogOut className="mr-1" />Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex justify-around mt-4 sm:mt-6 border-b pb-2 text-gray-600">
          {[{
            id: "favourites",
            label: `My Wishlist (${user?.favourites?.length || 0})`
          },
          {
            id: "history",
            label: `Booking History (${bookings?.length || 0})` // Display count of bookings
          }].map((tab) => (
            <button
              key={tab.id}
              className={`cursor-pointer font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${activeTab === tab.id ? "text-white bg-orange-500" : "hover:bg-gray-200"}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6 p-4 sm:p-6">
          {/* Favourites Tab */}
          {activeTab === "favourites" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {user?.favourites?.length > 0 ? (
                user.favourites.map((item) => (
                  <div
                    key={item} // Assuming 'item' is a unique identifier
                    className="bg-white shadow-md rounded-lg overflow-hidden"
                  >
                    <img
                      src={`https://source.unsplash.com/200x150/?hotel,beach${item}`}
                      alt={`Favourite Hotel ${item}`}
                      className="w-full h-32 object-cover"
                      loading="lazy"
                    />
                    <div className="p-3">
                      <h3 className="font-semibold">Hotel {item}</h3>
                      <p className="text-gray-500 text-sm">⭐ 4.5 Rating</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full flex justify-center items-center h-32">
                  <p className="text-center text-gray-600 capitalize">No favourites added yet.</p>
                </div>
              )}
            </div>
          )}

          {/* Booking History Tab */}
          {activeTab === "history" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <div
                    key={booking._id} // Using '_id' as the unique key for each booking
                    className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="p-4">
                      <h3 className="font-semibold text-xl text-gray-800">{booking.title}</h3>
                      <p className="text-gray-500 text-sm mb-2">  Date: {new Date(booking.bookedAt).toLocaleString()}
                      </p>
                      {/* <p
                        className={`text-sm font-semibold mb-2 ${booking.status === "Active" ? "text-green-600" : "text-red-600"}`}
                      >
                        Status: {booking.status}
                      </p> */}
                      <p className="text-gray-700 font-medium">Amount: ${booking.tourTitle}</p>

                      {/* Description */}
                      {/* <p className="text-gray-600 mt-2">
                        {booking.description.length > 150 ? (
                          <>
                            {booking.description.slice(0, 150)}...
                            <button
                              onClick={() => alert(booking.description)} // On click, show the full description
                              className="text-orange-500 hover:text-orange-700 ml-1"
                            >
                              Read More
                            </button>
                          </>
                        ) : (
                          booking.description
                        )}
                      </p> */}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full flex justify-center items-center h-32">
                  <p className="text-center text-gray-600 capitalize">No booking history available.</p>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Profile;
