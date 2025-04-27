import { createContext, useContext, useEffect, useReducer } from "react";
import {
  initialRegisterState,
  registerReducer,
  RegisterState,
} from "../reducer/registerReducer";
import { useRegisterMutation } from "../api/use-register-hook";
import { RegisterRequestDto } from "../../../../api";
import { useLoading } from "../../../../contexts/LoadingContext";

export interface RegisterContext {
  state: RegisterState;
  handleUsernameChange: (username: string) => void;
  handleEmailChange: (email: string) => void;
  handlePasswordChange: (email: string) => void;
  handleFamilyNameChange: (email: string) => void;
  handleGivenNameChange: (email: string) => void;
  handleGenderChange: (gender: RegisterRequestDto.gender) => void;
  handleRegister: () => void;
}

const registerContext = createContext<RegisterContext | null>(null);

export function RegisterProvider(props: {
  children: React.ReactNode;
}): React.ReactElement {
  const [state, dispatch] = useReducer(registerReducer, initialRegisterState);
  const registerMutation = useRegisterMutation();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(registerMutation.isPending);
  }, [setIsLoading, registerMutation.isPending]);

  const handleRegister = () => {
    registerMutation.mutate(
      {
        username: state.username,
        email: state.email,
        password: state.password,
        familyName: state.familyName,
        givenName: state.givenName,
        gender: state.gender,
      },
      {
        onSuccess(data) {
          console.log(data);
        },
      }
    );
  };

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

  const handleGenderChange = (gender: RegisterRequestDto.gender) => {
    dispatch({
      type: "SET_GENDER",
      payload: gender,
    });
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
        handleRegister,
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
