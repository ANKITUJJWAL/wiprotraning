// server.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("../DB/Connect.js");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
  res.send("Supplier API running...");
});

// Start server
const start = async () => {
  await connectDB(process.env.MONGO_URL);
  app.listen(3000, () => console.log("Server running on port 3000"));
};

start();