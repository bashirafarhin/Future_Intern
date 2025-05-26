import User from "../database/models/user.model.js";

// Get all employees (admin only)
export const getAllEmployees = async (req, res) => {
  try {
    const employees = await User.find({ role: "employee" }).select("-password");
    res.json({ employees : employees });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get employee by ID (admin only)
export const getEmployeeById = async (req, res) => {
  try {
    const employee = await User.findById(req.params.id).select("+password");
    if (!employee || employee.role !== "employee") {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update employee (admin only)
export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    // Exclude email and dateOfJoining from updates (optional, based on your logic)
    const updates = { ...req.body };
    delete updates.email;
    delete updates.dateOfJoining;
    const employee = await User.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });
    if (!employee || employee.role !== "employee") {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json({ message: "Employee updated successfully", employee });
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).json({ message: error.message });
  }
};

// Delete employee (admin only)
export const deleteEmployee = async (req, res) => {
  try {
    const employee = await User.findById(req.params.id);
    if (!employee || employee.role !== "employee") {
      return res.status(404).json({ message: "Employee not found" });
    }
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserProfile = (req, res) => {
  res.json({ user: req.user }); // req.user is set in the protect middleware
};