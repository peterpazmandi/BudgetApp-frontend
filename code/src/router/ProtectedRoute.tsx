import { useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { LANDING_PAGE_ROUTE } from "../router/Routes";
import { useTranslation } from "../common/i18n/hooks/useTranslation";
import { useNotification } from "../hooks/useNotification";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute = (props: Readonly<ProtectedRouteProps>) => {
  const { user, isFirstUserFetchHappend } = useUserContext();
  const navigate = useNavigate();
  const translate = useTranslation();
  const { showError } = useNotification();

  useEffect(() => {
    if (!user && isFirstUserFetchHappend) {
      showError(translate("not_logged_in_error"));
      navigate(LANDING_PAGE_ROUTE);
    }
  }, [user, isFirstUserFetchHappend, showError, translate, navigate]);

  return props.element;
};

export default ProtectedRoute;
