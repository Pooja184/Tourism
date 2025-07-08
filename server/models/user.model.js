import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";



const userSchema=new Schema(
    {
        fullName:{
            type:String,
            required:true,
            trim:true,
            index:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        },
        password:{
            type:String,
            required:[true,'Password is required']
        },
        bookingHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"Booking"
            }
        ],
        favorites:[
            {
                type:Schema.Types.ObjectId,
                ref:"Tour"
            }
        ]
    },
   {timestamps:true}
)

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password= await bcrypt.hash(this.password,10)

})

userSchema.methods.isPasswordCorrect =async function(password){
    if(!password){
        throw new Error("Password is required")
    }
    //comapare password with hash password
   const isMatch = await bcrypt.compare(password,this.password);
   return isMatch;
}

export const User=mongoose.model("User",userSchema);
