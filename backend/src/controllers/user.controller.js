import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser= asyncHandler(async(req,res)=>{
    // res.status(200).json({
    //        message:"explore ratnagiri with Pooja & Anuja"
    //     })
    const {fullName,email,password}=req.body;
    // if(
    //     [fullName,email,password].some((field)=>
    //     field?.trim()==="")
    // ){
    //     throw new ApiError(400,"All fields are required");
    // }
    if(!(fullName && email && password)){
        throw new ApiError(400,"All fields are required");
    }

    const existedUSer=await User.findOne({email});
    if(existedUSer){
        throw new ApiError(409,"User already exists");
    }
    const user=await User.create({fullName,email,password});

    const createdUser=await User.findById(user._id).select("-password");

    if(!createdUser){
        throw new ApiError(500,"Something went wrong while registering the user");
    }

    return res.status(201).json(new ApiResponse(201,createdUser,"User registered successfully"));
    
})

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
        success: true 
    });
});


export const getUser = async (req, res) => {
    try {
        const { id } = req.params; // Get ID from request params
        const user = await User.findById(id); // Find user in DB
 
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user); // Send user data as response
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const getUserProfile = async (req, res) => {
    try {
        const userId=req.user._id;
        const user = await User.findById(userId)
        .select("-password")
        .populate({
            path:"bookingHistory",
            populate:{path:"tourId" , select:"name image location"}
        })
        .populate("favorites","name image location");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user); // Send user data as response
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
}


    
export{
    registerUser,
    loginUser,
}