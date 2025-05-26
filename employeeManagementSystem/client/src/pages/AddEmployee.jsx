import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
    position: "",
    salary: "",
    dateOfJoining: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res=await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/register`,
        {
          ...formData,
          role: "employee", // explicitly set the role
        },
        { 
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Employee added successfully!");
      navigate("/admin");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to add employee.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-center text-xl font-semibold mb-4">Add New Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Name", name: "name", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Password", name: "password", type: "password" },
          { label: "Department", name: "department", type: "text" },
          { label: "Position", name: "position", type: "text" },
          { label: "Salary", name: "salary", type: "number" },
          { label: "Date of Joining", name: "dateOfJoining", type: "date" },
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label className="block font-medium">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
