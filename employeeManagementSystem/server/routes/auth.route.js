import express from "express";
import { registerUser, loginUser } from "../controllers/auth.controller.js";
import { protect, adminOnly } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Login route (public)
router.post("/login", loginUser);

// Register new users (admin only)
router.post("/register", protect, adminOnly, registerUser);

export default router;
