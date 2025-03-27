import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Booking } from "../models/booking.model.js";
import { Review } from "../models/reviews.model.js";
import { BookingTour } from "../models/bookTour.model.js";

const registerUser = asyncHandler(async (req, res) => {
  // res.status(200).json({
  //        message:"explore ratnagiri with Pooja & Anuja"
  //     })
  const { fullName, email, password } = req.body;
  // if(
  //     [fullName,email,password].some((field)=>
  //     field?.trim()==="")
  // ){
  //     throw new ApiError(400,"All fields are required");
  // }
  if (!(fullName && email && password)) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUSer = await User.findOne({ email });
  if (existedUSer) {
    throw new ApiError(409, "User already exists");
  }
  const user = await User.create({ fullName, email, password });

  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User registered successfully"));
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
  // res.status(200).json({
  //     message:"createReview"
  // })
  const { name, rating, email, comment, attractionVisited, suggestions } =
    req.body;
  console.log("req.body", req.body);
  console.log(name, rating, comment);
  if (!name || !rating || !comment) {
    throw new ApiError(400, "All fields are required");
  }

  const review = await Review.create({
    name,
    rating,
    email,
    comment,
    attractionVisited,
    suggestions,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, review, "Review submitted successfully"));
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
      tourName,
      name,
      email,
      phone,
      travelDateFrom,
      travelDateTo,
      paymentMethod,
     
    } = req.body;
    console.log(req.body)
    const Tour=await BookingTour.create({
      tourTitle,userId,tourName,name,email,phone,travelDateFrom,travelDateTo,paymentMethod
    })
    return res
    .status(201)
    .json(201, Tour, "Plan submitted successfully");
  }
     catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
});


export const Getdeatils=asyncHandler(async(req,res)=>{
    try {
        const data=await Booking.find()
    res.status(200).json({ success: true, data: data });
        
    } catch (error) {
        console.log(error)
    }
})

export { registerUser, loginUser };
