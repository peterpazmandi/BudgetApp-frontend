import { createContext, useContext, useReducer } from "react";
import {
  initialRegisterState,
  registerReducer,
  RegisterState,
} from "../reducer/registerReducer";

export interface RegisterContext {
  state: RegisterState;
  handleUsernameChange: (username: string) => void;
  handleEmailChange: (email: string) => void;
  handlePasswordChange: (email: string) => void;
  handleFamilyNameChange: (email: string) => void;
  handleGivenNameChange: (email: string) => void;
  handleGenderChange: (gender: string) => void;
  handleRegister: () => void;
}

const registerContext = createContext<RegisterContext | null>(null);

export function RegisterProvider(props: {
  children: React.ReactNode;
}): React.ReactElement {
  const [state, dispatch] = useReducer(registerReducer, initialRegisterState);

  const handleUsernameChange = (username: string) => {
    dispatch({
      type: "SET_USERNAME",
      payload: username,
    });
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

  const handleFamilyNameChange = (familyName: string) => {
    dispatch({
      type: "SET_FAMILY_NAME",
      payload: familyName,
    });
  };

  const handleGivenNameChange = (givenName: string) => {
    dispatch({
      type: "SET_GIVEN_NAME",
      payload: givenName,
    });
  };

  const handleGenderChange = (gender: string) => {
    dispatch({
      type: "SET_GENDER",
      payload: gender,
    });
  };

  const handleRegister = () => {
    console.log(state);
  };

  return (
    <registerContext.Provider
      value={{
        state,
        handleUsernameChange,
        handleEmailChange,
        handlePasswordChange,
        handleFamilyNameChange,
        handleGivenNameChange,
        handleGenderChange,
        handleRegister
      }}
    >
      {props.children}
    </registerContext.Provider>
  );
}

export const useRegister = () => {
  const context = useContext(registerContext);
  if (!context) {
    throw new Error("useRegister must be used within a RegisterProvider");
  }
  return context;
};
