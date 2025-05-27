import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useSnackbar } from "notistack";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, form, {
        withCredentials: true,
      });
      enqueueSnackbar("Registration successful", { variant: "success" });
      navigate("/");
    } catch {
      enqueueSnackbar("Registration failed", { variant: "error" });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-green-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-green-600 mb-6">Register</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-300"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded mb-6 focus:outline-none focus:ring-2 focus:ring-green-300"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300"
        >
          Register
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already a user?{" "}
          <Link to="/" className="text-green-600 underline hover:text-green-800">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}
