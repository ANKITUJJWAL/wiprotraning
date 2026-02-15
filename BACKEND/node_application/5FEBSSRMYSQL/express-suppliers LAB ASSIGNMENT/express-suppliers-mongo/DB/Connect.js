// db/connect.js
const mongoose = require("mongoose");

const connectDB = async (url) => {
  if (mongoose.connection.readyState === 1) {
    console.log("Already connected to MongoDB");
    return;
  }
  await mongoose.connect(url); // ✅ no extra options needed
  console.log("MongoDB connected");
};

module.exports = connectDB;