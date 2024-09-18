import mongoose from "mongoose";
// Admin Schema
const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  usertype: {
    type: String,
    required: [true, "usertype is required"],
    default: "admin"
},
});

export default mongoose.model("Admin", adminSchema);