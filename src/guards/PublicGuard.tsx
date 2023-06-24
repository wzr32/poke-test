import { PrivateRoutes } from "@/models";
import { handleGetLocalData } from "@/utilities";
import { Navigate, Outlet } from "react-router-dom";

const PublicGuard = () => {
  const data = handleGetLocalData();
  if (data !== null) return <Navigate to={PrivateRoutes.DASHBOARD} />;
  return <Outlet />;
};
export default PublicGuard;
