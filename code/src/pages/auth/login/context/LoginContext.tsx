import { createContext, useContext, useReducer } from "react";
import { useLoginMutation } from "../api/use-login-hooks";
import {
  initialLoginState,
  loginReducer,
  LoginState,
} from "../reducer/reducer";
import { LoginRequestDto } from "../../../../api";

export interface LoginContext {
  state: LoginState;
  handleEmailChange: (email: string) => void;
  handlePasswordChange: (password: string) => void;
  handleLogin: () => void;
}

const loginContext = createContext<LoginContext | null>(null);

export function LoginProvider(props: {
  children: React.ReactNode;
}): React.ReactElement {
  const [state, dispatch] = useReducer(loginReducer, initialLoginState);
  const loginMutation = useLoginMutation({
    email: state.email,
    password: state.password,
  } as LoginRequestDto);

  const handleLogin = () => {
    loginMutation.mutate();
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
      value={{ state, handleEmailChange, handlePasswordChange, handleLogin }}
    >
      {props.children}
    </loginContext.Provider>
  );
}

export const useLogin = () => {
  const context = useContext(loginContext);
  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};
