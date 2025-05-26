import express from "express";
import {
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  getUserProfile,
} from "../controllers/user.controller.js";

import { protect, adminOnly } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Admin-only routes
router.get("/employees", protect, adminOnly, getAllEmployees);
router.get("/employees/:id", protect, getEmployeeById);
router.put("/employees/:id", protect, adminOnly, updateEmployee);
router.delete("/employees/:id", protect, adminOnly, deleteEmployee);

// Any logged-in user can get their profile
router.get("/profile", protect, getUserProfile);

export default router;
