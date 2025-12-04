const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); // removed extra "../backend"
const router = require("./routes/index");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// API routes
app.use("/api", router);

// Default root route to fix "Cannot GET /"
app.get("/", (req, res) => {
  res.send("Welcome to E-Commerce Application API!");
});

// Port
const PORT = process.env.PORT || 8080;

// Connect DB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Connected to the DB");
    console.log(`Server is running on port ${PORT}`);
  });
});

module.exports = app; // needed for Vercel
