import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RedirectBasedOnRole = () => {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" replace />;
  if (user.role === "admin") return <Navigate to="/admin" replace />;
  if (user.role === "employee") return <Navigate to={`/employee/${user._id}`} replace />;

  return <Navigate to="/login" replace />;
};

export default RedirectBasedOnRole;
