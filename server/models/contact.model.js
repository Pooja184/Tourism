import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name:{
        type:String,
        required:true,
    },
    email:{
      type:String,
      unique:true,
      lowercase:true,
      trim:true,
     },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Contact = mongoose.model("Contact", contactSchema);
