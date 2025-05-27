import { users } from'./auth.controller.js'; // Assuming users is an array of user objects

export const getProfile = (req, res) => {
  res.json({ user: req.session.user });
};

// DELETE user by email (admin only)
export const deleteUser = (req, res) => {
  const { email } = req.body;
  const index = users.findIndex(u => u.email === email);
  if (index === -1) return res.status(404).json({ message: "User not found" });
  users.splice(index, 1);
  res.status(200).json({ message: `User ${email} deleted` });
};

// controllers/user.controller.js
export const getAllUsers = (req, res) => {
  const filteredUsers = users
    .filter(user => user.role !== 'admin')
    .map(user => ({
      email: user.email,
      role: user.role, // Optional if you want to show it
    }));
  res.json(filteredUsers);
};
