import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attractionVisited: "",
    rating: "",
    comment: "",
    suggestions: "",
  });

  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      alert("Please log in");
    }
  }, [userId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert("User ID is missing. Please refresh and try again.");
      return;
    }

    if (
      !formData.name ||
      !formData.email ||
      !formData.attractionVisited ||
      !formData.rating ||
      !formData.comment
    ) {
      alert("Please fill all the fields");
      return;
    }

    const requestData = {
      name: formData.name,
      email: formData.email,
      attractionVisited: formData.attractionVisited,
      rating: Number(formData.rating),
      comment: formData.comment,
      suggestions: formData.suggestions,
    };

    try {
      const response = await axios.post("/api/v1/users/reviews", requestData);
      setReviews([response.data, ...reviews]);
      toast.success("Thank you for your review! 🌴");

      setFormData({
        name: "",
        email: "",
        attractionVisited: "",
        rating: "",
        comment: "",
        suggestions: "",
      });
    } catch (err) {
      console.error("Review Error:", err.response?.data || err.message);
      alert("Failed to submit review. Please try again.");
    }
  };

  const getReviews = async () => {
    try {
      let res = await axios.get("/api/v1/users/getReviews");
      setReviews(res.data.data);
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-orange-700 text-center mb-6">
        🌴 Share & Read Reviews
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Review Form */}
        <div className="bg-gradient-to-r from-orange-100 to-orange-200 shadow-lg rounded-lg border border-orange-500 p-6">
          <h3 className="text-xl font-semibold text-orange-800 mb-4">
            Write a Review
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 border rounded bg-white shadow-sm focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-2 border rounded bg-white shadow-sm focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="text"
              name="attractionVisited"
              value={formData.attractionVisited}
              onChange={handleChange}
              placeholder="Tour/Attraction Visited"
              className="w-full p-2 border rounded bg-white shadow-sm focus:ring-2 focus:ring-orange-400"
              required
            />
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white shadow-sm focus:ring-2 focus:ring-orange-400"
              required
            >
              <option value="">Select Rating</option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} ⭐
                </option>
              ))}
            </select>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Your Review"
              className="w-full p-2 resize-none border rounded bg-white shadow-sm focus:ring-2 focus:ring-orange-400"
              rows="3"
              required
            ></textarea>
            <textarea
              name="suggestions"
              value={formData.suggestions}
              onChange={handleChange}
              placeholder="Suggestions for Improvement (Optional)"
              className="w-full p-2 border resize-none rounded bg-white shadow-sm focus:ring-2 focus:ring-orange-400"
              rows="3"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Submit Review
            </button>
          </form>
        </div>

        {/* Display Reviews with Scroll */}
        <div className="bg-white shadow-lg rounded-lg border border-gray-300 p-6">
          <h3 className="text-xl font-semibold text-orange-800 mb-4">
            User Reviews
          </h3>
          <div className="h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-200 p-2">
            {reviews.length > 0 ? (
              reviews.map((rev) => (
                <div
                  key={rev._id}
                  className="bg-orange-100 p-4 rounded-lg mb-4 shadow-sm"
                >
                  <p className="text-lg font-semibold text-orange-700">
                    {rev.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {rev.attractionVisited}
                  </p>
                  <p className="text-yellow-500">{"⭐".repeat(rev.rating)}</p>
                  <p className="mt-2 text-gray-800">{rev.comment}</p>
                  {rev.suggestions && (
                    <p className="text-gray-600 italic">💡 {rev.suggestions}</p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic">
                No reviews yet. Be the first to share your experience! 🌟
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
