import { PublicRoutes } from "@/models";
import { handleGetLocalData } from "@/utilities";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {
  const data = handleGetLocalData();
  if (data === null) return <Navigate to={PublicRoutes.LOGIN} />;
  return <Outlet />;
};
export default AuthGuard;
