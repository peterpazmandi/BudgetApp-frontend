import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import Home from "../pages/Home";
import { LANDING_PAGE_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "./Routes";
import Register from "../pages/auth/register/Register";
import { useLoading } from "../contexts/LoadingContext";
import FullPageSpinner from "../components/FullPageSpinner";
import { RegisterProvider } from "../pages/auth/register/context/RegisterContext";

const BudgetAppRoutes = () => {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && <FullPageSpinner />}
      <Routes>
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
      </Routes>
    </>
  );
};

export default BudgetAppRoutes;
