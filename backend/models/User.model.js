import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    cartData: {
        type: Object,
    },
    date:{
        type:Date,
        default:Date.now()
    }
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
