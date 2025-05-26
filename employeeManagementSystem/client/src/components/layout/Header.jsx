import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <button
        onClick={logout}
        className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 transition"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
