import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    pseudo: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: { type: Boolean, default: false },
    model: String,
  },
  { collection: "users" }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
