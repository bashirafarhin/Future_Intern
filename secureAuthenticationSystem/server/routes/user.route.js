import express from "express";
import { body } from "express-validator";
import { getProfile, deleteUser, getAllUsers } from "../controllers/user.controller.js";
import { isAuthenticated, isAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/profile", isAuthenticated, getProfile);

router.delete("/delete-user", [
  body("email").isEmail()
], isAuthenticated, isAdmin, deleteUser);

router.get("/all-users", isAuthenticated, isAdmin, getAllUsers);

export default router;