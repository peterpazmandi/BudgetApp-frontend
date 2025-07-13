import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { LoginRequestDto } from "../../../../api";
import { useNotification } from "../../../../common/hooks/useNotification";
import { useTranslation } from "../../../../common/i18n/hooks/useTranslation";
import { useLoading } from "../../../../contexts/LoadingContext";
import { OVERVIEW_ROUTE } from "../../../../router/Routes";
import { useLoginMutation } from "../api/use-login-hooks";
import {
  initialLoginState,
  loginReducer,
  LoginState,
} from "../reducer/loginReducer";

export interface LoginContext {
  state: LoginState;
  isLoading: boolean;
  handleEmailChange: (email: string) => void;
  handlePasswordChange: (password: string) => void;
  handleLogin: () => void;
}

const loginContext = createContext<LoginContext | null>(null);

export function LoginProvider(props: {
  children: React.ReactNode;
}): React.ReactElement {
  const [state, dispatch] = useReducer(loginReducer, initialLoginState);
  const loginMutation = useLoginMutation();
  const { setIsLoading } = useLoading();
  const { showSuccess } = useNotification();
  const translate = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(loginMutation.isPending);
  }, [setIsLoading, loginMutation.isPending]);

  const handleLogin = () => {
    loginMutation.mutate(
      {
        email: state.email,
        password: state.password,
      } as LoginRequestDto,
      {
        onSuccess: () => {
          showSuccess(translate("login_success"));
          navigate(OVERVIEW_ROUTE);
        },
      }
    );
  };

  const handleEmailChange = (email: string) => {
    dispatch({
      type: "SET_EMAIL",
      payload: email,
    });
  };

  const handlePasswordChange = (password: string) => {
    dispatch({
      type: "SET_PASSWORD",
      payload: password,
    });
  };

  return (
    <loginContext.Provider
      value={{
        state,
        isLoading: loginMutation.isPending,
        handleEmailChange,
        handlePasswordChange,
        handleLogin,
      }}
    >
      {props.children}
    </loginContext.Provider>
  );
}

export const useLoginContext = () => {
  const context = useContext(loginContext);
  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};
