import User from "../database/models/user.model.js";
import { asyncErrorHandler } from "../middlewares/asyncErrorHandler.middleware.js";
import { sendToken } from "../utils/sendToken.js";
import { ErrorHandler } from "../utils/errorHandler.js";
import { sendEmail } from "./email.controller.js";
import crypto from "crypto";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Register User
export const registerUser = asyncErrorHandler(async (req, res, next) => {
  const { name, email, gender, password, avatar } = req.body;
  const myCloud = await cloudinary.uploader.upload(avatar, {
    folder: "avatars",
    width: 150,
    crop: "scale",
  });
  User.create({
    name,
    email,
    gender,
    password,
    avatar: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
  })
    .then((user) => {
      sendToken(user, 200, res);
    })
    .catch((error) => {
      res.status(500).json({ message: "Error creating user" });
    });
});

// Login User
export const loginUser = asyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    next(new ErrorHandler("Please Enter Email And Password", 400));
    return;
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }
  sendToken(user, 200, res);
});

// Logout User
export const logoutUser = asyncErrorHandler(async (req, res, next) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });
  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

// Get User Details
export const getUserDetails = async (req, res, next) => {
  res.status(200).json({
    success: true,
    user : req.user,
  });
};

// Forgot Password
export const forgotPassword = asyncErrorHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new ErrorHandler("User Not Found", 404));
  }
  const resetToken = await user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });
  const frontendurl = process.env.FRONTEND_URL || "http://localhost:5173";
  const resetPasswordUrl = `${frontendurl}/password/reset/${resetToken}`;
  try {
    await sendEmail({
      email: user.email,
      type: "password_reset",
      data: {
        name: user.name,
        reset_url: resetPasswordUrl,
      },
    });
    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler(error.message, 500));
  }
});

// Reset Password
export const resetPassword = asyncErrorHandler(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });
  if (!user) {
    return next(new ErrorHandler("Invalid reset password token", 404));
  }
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();
  sendToken(user, 200, res);
});

// Update Password
export const updatePassword = asyncErrorHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");
  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Old Password is Invalid", 400));
  }
  user.password = req.body.newPassword;
  await user.save();
  sendToken(user, 201, res);
});

// Update User Profile
export const updateProfile = asyncErrorHandler(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
  };
  if (req.body.avatar !== "") {
    const user = await User.findById(req.user.id);
    const imageId = user.avatar.public_id;
    await cloudinary.uploader.destroy(imageId);
    const myCloud = await cloudinary.uploader.upload(req.body.avatar, {
      folder: "avatars",
      width: 150,
      crop: "scale",
    });
    newUserData.avatar = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }
  await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: true,
  });

  res.status(200).json({
    success: true,
  });
});