import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const token = localStorage.getItem("auth_token"); // Verifica si el usuario tiene un token

  return token ? <Outlet /> : <Navigate to="/login" />;
}
