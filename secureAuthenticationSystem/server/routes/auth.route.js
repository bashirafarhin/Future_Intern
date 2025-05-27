import express from "express";
import { body } from "express-validator";
import { registerUser, loginUser, logoutUser } from "../controllers/auth.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", [
  body("email").isEmail(),
  body("password").isLength({ min: 5 })
], registerUser);

router.post("/login", [
  body("email").isEmail(),
  body("password").exists()
], loginUser);

router.post("/logout", isAuthenticated, logoutUser);


export default router;
