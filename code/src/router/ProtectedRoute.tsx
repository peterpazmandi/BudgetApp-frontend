import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../common/hooks/useNotification";
import { useTranslation } from "../common/i18n/hooks/useTranslation";
import { useUserContext } from "../contexts/UserContext";
import { LANDING_PAGE_ROUTE } from "../router/Routes";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute = (props: Readonly<ProtectedRouteProps>) => {
  const { user, isFetching, isLoading } = useUserContext();
  const navigate = useNavigate();
  const translate = useTranslation();
  const { showError } = useNotification();

  useEffect(() => {
    if (!user && !isFetching && !isLoading) {
      showError(translate("not_logged_in_error"));
      navigate(LANDING_PAGE_ROUTE);
    }
  }, [user, isFetching, showError, translate, navigate]);

  return props.element;
};

export default ProtectedRoute;
