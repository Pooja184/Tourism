import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        userId :{
            type:Schema.Types.ObjectId,
            required:true,
            ref:"User"
        },
        tourId:{
            type:Schema.Types.ObjectId,
            required:true,
            ref:"Tour"
        },
        bookedAt:{
            type:Date,
            default:Date.now    
        },
    },
    {timestamps:true}
)

export const Booking=mongoose.model("Booking",bookingSchema);
// Compare this snippet from frontend/ratnagiriTourism/src/components/pages/Profile.jsx:
