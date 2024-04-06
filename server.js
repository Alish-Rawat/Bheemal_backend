const port = 4000;
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectToMongoDB from "./database/connectToMongoDB.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// console.log("sds");
dotenv.config();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-allow-Origin",
    "https://e-commerce-frontend-one-sigma.vercel.app",
    "http://localhost:3000"
    // "http://localhost:3000/login"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content-Type,Accept"
  );
  next();
});
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Express is Running");
});

app.listen(port, (error) => {
  connectToMongoDB();
  if (!error) {
    console.log("Server Running on Port : " + port);
  } else {
    console.log("Error:", error);
  }
});
