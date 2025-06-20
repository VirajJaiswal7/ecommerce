import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cardData: { type: Object, default: {} },
  },
  { minimize: false }
);

export const User = mongoose.model("User", userSchema);
