import { Booking } from "../models/booking.model.js";
import { BookingTour } from "../models/bookTour.model.js";
import { Contact } from "../models/contact.model.js";
import { Wishlist } from "../models/favorite.model.js";
import { Review } from "../models/reviews.model.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const emailLower = email.toLowerCase();

  const existingUser = await User.findOne({ email: emailLower });
  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  const newUser = await User.create({
    fullName,
    email: emailLower,
    password,
  });

  const userWithoutPassword = await User.findById(newUser._id).select(
    "-password"
  );

  if (!userWithoutPassword) {
    return res
      .status(500)
      .json({ message: "Something went wrong during registration" });
  }

  return res.status(201).json({
    message: "User registered successfully",
    user: userWithoutPassword,
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  if (!email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  // Find user by email only
  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  // Validate password
  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  // Fetch user details without password
  const loggedUser = await User.findById(user._id).select("-password");

  return res.status(200).json({
    message: `Welcome ${loggedUser.fullName}`,
    users: loggedUser,
    success: true,
  });
});

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const createBooking = async (req, res) => {
  try {
    const { title, description, price, userId } = req.body;

    if (!title || !description || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBooking = new Booking({
      userId,
      title,
      description,
      price,
    });

    await newBooking.save();

    res
      .status(201)
      .json({ message: "Booking successful", booking: newBooking });
  } catch (error) {
    console.error("Error while creating booking:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const getBookingDetails = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const bookings = await BookingTour.find({ userId: id });

    if (!bookings || bookings.length === 0) {
      return res
        .status(404)
        .json({ message: "No bookings found for this user" });
    }

    // Return booking details
    return res.status(200).json({ bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const createReview = asyncHandler(async (req, res) => {
  const { name, rating, email, comment, attractionVisited, suggestions } =
    req.body;

  if (!name || !rating || !comment) {
    return res.status(400).json({
      success: false,
      message: "Name, rating, and comment are required",
    });
  }

  const review = await Review.create({
    name,
    rating,
    email,
    comment,
    attractionVisited,
    suggestions,
  });

  res.status(201).json({
    success: true,
    message: "Review submitted successfully",
    data: review,
  });
});

export const getReviews = asyncHandler(async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json({ success: true, data: reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

export const StoreTour = asyncHandler(async (req, res) => {
  try {
    const {
      tourTitle,
      userId,
      tourId,
      tourDescription,
      tourPrice,
      tourImage,
      name,
      email,
      phone,
      travelDateFrom,
      travelDateTo,
      paymentMethod,
      cardNumber,
      expiryDate,
      cvv,
    } = req.body;

    console.log(req.body); // Logging the incoming request data to check everything

    // Create a new booking with the provided data
    const tour = await BookingTour.create({
      tourTitle,
      tourId,
      tourDescription,
      tourPrice,
      tourImage,
      userId,
      name,
      email,
      phone,
      travelDateFrom,
      travelDateTo,
      paymentMethod,
      cardNumber,
      expiryDate,
      cvv,
    });

    return res.status(201).json({
      success: true,
      message: "Plan submitted successfully",
      tour,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

export const Getdeatils = asyncHandler(async (req, res) => {
  try {
    const data = await Booking.find();
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    console.log(error);
  }
});

export const contactUs = asyncHandler(async (req, res) => {
  const { name, email, comment } = req.body;
  console.log("req.body", req.body);

  if (!name && !email && !comment) {
    throw new ApiError(400, "All fields are required");
  }

  const contact = await Contact.create({
    name,
    email,
    comment,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, contact, "Contact Details submited"));
});

// export const paymentGateway=asyncHandler(async(req,res)=>{
//   try {
//     const { tourTitle, name, email, phone, travelDateFrom, travelDateTo, paymentMethod } = req.body;

//     // Validate request body
//     if (!tourTitle || !name || !email || !phone || !travelDateFrom || !travelDateTo || !paymentMethod) {
//       return res.status(400).json({ message: "All fields are required!" });
//     }

//     const newBooking = new BookingTour({
//       tourTitle,
//       name,
//       email,
//       phone,
//       travelDateFrom,
//       travelDateTo,
//       paymentMethod,
//     });

//     // Save the booking to the database
//     await newBooking.save();

//     return res.status(201).json({
//       message: "Booking created successfully",
//       booking: newBooking,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Server error" });
//   }
// })

export const toggleFavorite = async (req, res) => {
  const { userId, tour } = req.body;

  if (!userId || !tour) {
    return res
      .status(400)
      .json({ message: "userId and full tour data are required" });
  }

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check if the tour already exists in user's wishlist
    const existing = await Wishlist.findOne({
      user: userId,
      "tour.title": tour.title, // match by title, assuming it's unique per user
    });

    let message = "";
    if (existing) {
      // Remove from wishlist
      await Wishlist.findByIdAndDelete(existing._id);
      message = "Removed from Wishlist";
    } else {
      // Add to wishlist
      const newWishlistItem = new Wishlist({
        user: userId,
        tour: {
          title: tour.title,
          image: tour.image,
          description: tour.description,
          price: tour.price,
        },
      });
      await newWishlistItem.save();
      message = "Added to wishlist";
    }

    // Optionally return updated wishlist
    const updatedWishlist = await Wishlist.find({ user: userId });

    return res.status(200).json({
      message,
      wishlist: updatedWishlist,
    });
  } catch (error) {
    console.error("Wishlist toggle error:", error);
    return res.status(500).json({ message: "Something went wrong", error });
  }
};

export const getAllFavorites = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ message: "userId is required" });
  }

  try {
    const favorites = await Wishlist.find({ user: userId });

    return res.status(200).json({
      message: "Fetched wishlist successfully",
      favorites,
    });
  } catch (error) {
    console.error("Fetch wishlist error:", error);
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

export { loginUser, registerUser };
