import { createContext, useContext, useEffect, useReducer } from "react";
import { useLoginMutation } from "../api/use-login-hooks";
import {
  initialLoginState,
  loginReducer,
  LoginState,
} from "../reducer/loginReducer";
import { LoginRequestDto } from "../../../../api";
import { useSnackbar } from "notistack";
import { useLoading } from "../../../../contexts/LoadingContext";

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
  const { enqueueSnackbar } = useSnackbar();

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
          enqueueSnackbar(
            "You have successfully logged in, we will redirect you in a moment.",
            { variant: "success" }
          );
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
