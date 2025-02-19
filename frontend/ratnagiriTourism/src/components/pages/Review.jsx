import React, { useState } from "react";

const Review = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tour, setTour] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [recommend, setRecommend] = useState("yes");
  const [suggestions, setSuggestions] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback submitted! Thank you, ${name}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-l from-orange-50 to-orange-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          We Value Your Feedback! 🌟
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            {/* <label className="text  -gray-700 font-medium mb-1">Enter Your Name</label> */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="NAME"
              className="border-b-2 border-gray-400 p-3 outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            {/* <label className="text-gray-700 font-medium">Your Email</label> */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="EMAIL"
              className="border-b-2 border-gray-300 p-3 outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">
              Tour/Attraction Visited
            </label>
            <input
              type="text"
              value={tour}
              onChange={(e) => setTour(e.target.value)}
              placeholder="e.g. Ganpatipule Beach"
              className="border-b-2 border-gray-300 p-3 outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Rating (1-5)</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="border-b-2 border-gray-300 p-3 outline-none"
            >
              <option value="">Select Rating</option>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Review:</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Share your experience"
              className="border-b-2 border-gray-300 p-3  h-24 resize-none outline-none"
              required
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">
              Would you recommend Ratnagiri to others?
            </label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="yes"
                  checked={recommend === "yes"}
                  onChange={() => setRecommend("yes")}
                  className="accent-blue-600"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="no"
                  checked={recommend === "no"}
                  onChange={() => setRecommend("no")}
                  className="accent-red-600"
                />
                No
              </label>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">
              Suggestions for Improvement:
            </label>
            <textarea
              value={suggestions}
              onChange={(e) => setSuggestions(e.target.value)}
              placeholder="Your suggestions here"
              className="border-b-2 border-gray-300 p-3 outline-none resize-none"
            ></textarea>
          </div>

          <div className="flex flex-col">
            {/* <label className="text-gray-700 font-medium">
              Additional Comments:
            </label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Any other comments"
              className="border border-gray-300 p-3 rounded-lg h-20 resize-none focus:ring-2 focus:ring-blue-400 transition"
            ></textarea> */}
          </div>

          <button
            type="submit"
            className="w-full md:w-40 mx-auto bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;