import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checked, setChecked] = useState(false);

  const token = localStorage.getItem("token");
  
  const { data, error, loading } = useFetch(
    token ? `${import.meta.env.VITE_BACKEND_URL}/api/user/profile` : null
  );

  useEffect(() => {
    if (!token) {
      setChecked(true); // no token, no need to fetch
      return;
    }

    if (data) {
      setUser(data.user); // or whatever structure you receive
      setChecked(true);
    }

    if (error && !loading) {
      console.error("Auth error:", error);
      setChecked(true);
    }
  }, [data, error, loading]);

  return (
    <AuthContext.Provider value={{ user, setUser, checked }}>
      {children}
    </AuthContext.Provider>
  );
};
