const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); // removed extra "../backend"
const router = require("./routes/index");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

// Middleware
// CORS configuration - allow multiple origins for development
const allowedOrigins = [
  "https://e-commerance-appliaction-rutp.vercel.app",
  "http://localhost:3000",
  "http://localhost:3003"
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, Postman, or curl requests)
    if (!origin) {
      return callback(null, true);
    }
    
    // Check if origin is in allowed list
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      // In development, allow any localhost origin
      if (process.env.NODE_ENV !== 'production' && origin && origin.startsWith('http://localhost:')) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  exposedHeaders: ["Content-Type"],
  credentials: true,
  optionsSuccessStatus: 200
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle preflight requests explicitly (optional, but ensures it works)
app.options('*', cors(corsOptions));
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
