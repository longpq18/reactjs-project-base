import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const authLogin = localStorage.getItem("ACCESS_TOKEN");

  if (!authLogin) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
