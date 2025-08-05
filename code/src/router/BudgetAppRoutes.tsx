import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import Home from "../pages/Home";
import {
  LANDING_PAGE_ROUTE,
  LOGIN_ROUTE,
  OVERVIEW_ROUTE,
  REGISTER_ROUTE,
  VERIFY_EMAIL_ROUTE,
} from "./Routes";
import Register from "../pages/auth/register/Register";
import { useLoading } from "../contexts/LoadingContext";
import FullPageSpinner from "../components/FullPageSpinner";
import { RegisterProvider } from "../pages/auth/register/context/RegisterContext";
import ProtectedRoute from "./ProtectedRoute";
import Overview from "../pages/overview/Overview";
import VerifyEmail from "../pages/auth/verifyEmail/VerifyEmail";

const BudgetAppRoutes = () => {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && <FullPageSpinner />}
      <Routes>
        {/* Public routes */}
        <Route path={LANDING_PAGE_ROUTE} element={<Home />} />
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route
          path={REGISTER_ROUTE}
          element={
            <RegisterProvider>
              <Register />
            </RegisterProvider>
          }
        />
        <Route path={VERIFY_EMAIL_ROUTE} element={<VerifyEmail />} />
        {/* Protected routes */}
        <Route
          path={OVERVIEW_ROUTE}
          element={<ProtectedRoute element={<Overview />} />}
        />
      </Routes>
    </>
  );
};

export default BudgetAppRoutes;
