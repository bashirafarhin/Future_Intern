import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

import Login from "./pages/Login";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import RootLayout from "./components/layout/RootLayout";
import AddEmployee from "./pages/AddEmployee";
import RedirectBasedOnRole from "./routes/RedirectBasedOnRole";

function App() {
  return (
      <Router>
        <AuthProvider>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />

          {/* Root Redirect Route */}
          <Route path="/" element={<RedirectBasedOnRole />} />

          {/* Admin Routes */}
          <Route element={<RootLayout />}>
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/add-employee"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AddEmployee />
                </ProtectedRoute>
              }
            />
            <Route
            path="/employee/:id"
            element={
              <ProtectedRoute>
                <EmployeeDashboard />
              </ProtectedRoute>
            }
          />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<RedirectBasedOnRole />} />
        </Routes>
        </AuthProvider>
      </Router>
  );
}

export default App;
