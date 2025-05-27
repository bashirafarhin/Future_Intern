import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useSnackbar } from "notistack";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        form,
        {
          withCredentials: true,
        }
      );
      const profile = res.data.user;
      if (profile.role === "admin") {
        navigate("/admin");
      } else if (profile.role === "reader") {
        navigate("/home");
      } else {
        enqueueSnackbar("Unknown role. Access denied.", { variant: "error" });
        navigate("/");
      }
      enqueueSnackbar("Login successful", { variant: "success" });
    } catch {
      enqueueSnackbar("Login failed", { variant: "error" });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Not signed up?{" "}
          <Link
            to="/register"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
}
