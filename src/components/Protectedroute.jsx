// PrivateRoutes.js
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  // Check if the user is authenticated by checking if userid exists in localStorage
  const userid = localStorage.getItem("user");

  // If userid exists, the user is authenticated
  const isAuthenticated = !!userid;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;