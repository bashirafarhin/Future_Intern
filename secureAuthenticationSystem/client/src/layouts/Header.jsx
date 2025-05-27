import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

const Header = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogout = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/logout`, {}, {
        withCredentials: true,
      });
      enqueueSnackbar("Logged out successfully", { variant: "success" });
      navigate("/");
    } catch (err) {
      enqueueSnackbar("Logout failed", { variant: "error" });
    }
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between container mx-auto">
        <div className="font-bold">AuthApp</div>
        <div className="space-x-4">
          <Link to="/home">Home</Link>
          <button
            onClick={handleLogout}
            className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-blue-100 transition"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
