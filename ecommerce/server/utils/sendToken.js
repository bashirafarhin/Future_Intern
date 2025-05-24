import jwt from "jsonwebtoken";

export const sendToken = (user, statusCode, res) => {
  const options = {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 day
    httpOnly: true,
    secure: true,
    sameSite: "None",
  };
  const token = jwt.sign({ id: user._id }, "secret");
  res.cookie("token", token, options);
  res.status(statusCode).json({
    success: true,
    user,
    token,
  });
};
