import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RootLayout from "./layouts/RootLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./pages/Home";
import SessionAuth from "./pages/SessionAuth";
import TokenAuth from "./pages/TokenAuth";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard"; // ✅ New import
import AdminRoute from "./routes/AdminRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <RootLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="session-auth" element={<SessionAuth />} />
          <Route path="token-auth" element={<TokenAuth />} />          
        </Route>


        <Route
          path="/admin"
          element={
            <AdminRoute>
              <RootLayout />
            </AdminRoute>
          }
        >
          <Route index element={<AdminDashboard />} />    
        </Route>


      </Routes>
    </BrowserRouter>
  );
}
