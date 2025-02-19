import React, { useState } from "react";
import ProfileImg from "../../Images/Profile_Cover.jpg";
import { FaUser, FaEdit } from "react-icons/fa";

const Profile= () => {
  const [activeTab, setActiveTab] = useState("favourites");
  const [profilePic, setProfilePic] = useState(null);

  // Placeholder user data (replace with actual data from backend)
  const user = {
    name: "Pooja Bhambid",
    location: "Maharashtra, India",
    favourites: [],
    bookings: [],
    history: [],
  };

  // Handle Profile Picture Upload
  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

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
              <h2 className="text-xl capitalize font-semibold">{user.name}</h2>
              <p className="text-gray-500">{user.location}</p>
            </div>
          </div>
          {/* Edit Button */}
          <button className="flex items-center bg-orange-500 text-white px-3 py-1 rounded text-sm mt-4 sm:mt-0 hover:bg-orange-600 transition-colors">
            <FaEdit className="mr-1" /> Edit Profile
          </button>
        </div>

        {/* Tabs */}
        <div className="flex justify-around mt-4 sm:mt-6 border-b pb-2 text-gray-600">
          {[
            {
              id: "favourites",
              label:` My Wishlist (${user.favourites.length})`,
            },
            {
              id: "history",
              label: `Booking History (${user.history.length})`,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`cursor-pointer font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                activeTab === tab.id
                  ? "text-white bg-orange-500"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6 p-4 sm:p-6">
          {activeTab === "favourites" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {user.favourites.length > 0 ? (
                user.favourites.map((item) => (
                  <div
                    key={item}
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
                  <p className="text-center text-gray-600 capitalize">
                    No favourites added yet.
                  </p>
                </div>
              )}
            </div>
          )}
          {activeTab === "history" && (
            <div className="flex justify-center items-center h-32">
              <p className="text-center text-gray-600 capitalize">
                No booking history available.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;