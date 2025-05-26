import User from "../database/models/user.model.js";
import { generateToken } from "../utils/token.js";


// Register - only Admin can create new users (employees or admins)
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role, department, position, salary, dateOfJoining } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });
    const user = new User({
      name,
      email,
      password,
      role: role || "employee",
      department,
      position,
      salary,
      dateOfJoining,
    });
    await user.save();
    res.status(201).json({
      message: "User created successfully",
      user
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Login for both admin and employee
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(401).json({ message: "Invalid email or password" });
    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(401).json({ message: "Invalid email or password" });
    const token = generateToken(user);
    res.json({
      token,
      user
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
