import mongoose from "mongoose";
const { model, Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  passord: String,
  email: String,
  createdAt: String,
});

const User = model("User", userSchema);

export default User;
