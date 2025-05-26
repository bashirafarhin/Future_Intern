import express from "express";
import cors from "cors";
import env from "dotenv";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
env.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

export default app;

// scripts/createAdmin.js
// import User from './database/models/user.model.js';
// async function createAdmin() {
//   const admin = new User({
//     name: "admin",
//     email: "admin@admin.com",
//     password: "admin",
//     role: "admin",
//   });

//   await admin.save();
//   console.log("Admin created!");
// }
// createAdmin();