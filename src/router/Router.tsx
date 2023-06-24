import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "@/models/route.model";

import { AuthGuard, PublicGuard } from "@/guards";
import { LoginView } from "@/pages/public/login";
import { RegisterView } from "@/pages/public/register";
import { DashboardView } from "@/pages/private/dashboard";
import { ProfileView } from "@/pages/private/profile";
import { NotFoundView } from "@/pages/public/not-found";
import { Layout } from "@/layout";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundView />} />
      <Route element={<PublicGuard />}>
        <Route index element={<Navigate to={PublicRoutes.LOGIN} />} />
        <Route path={PublicRoutes.LOGIN} element={<LoginView />} />
        <Route path={PublicRoutes.REGISTER} element={<RegisterView />} />
      </Route>
      <Route element={<AuthGuard />}>
        <Route element={<Layout />}>
          <Route index element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
          <Route path={PrivateRoutes.DASHBOARD} element={<DashboardView />} />
          <Route path={PrivateRoutes.PROFILE} element={<ProfileView />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default Router;
