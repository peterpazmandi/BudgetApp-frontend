import { createContext, useContext, useEffect, useReducer } from "react";
import {
  initialRegisterState,
  registerReducer,
  RegisterState,
} from "../reducer/registerReducer";
import { useRegisterMutation } from "../api/use-register-hook";
import { RegisterRequestDto } from "../../../../api";
import { useLoading } from "../../../../contexts/LoadingContext";
import { useValidator } from "../../../../hooks/useValidator";
import { AuthProvider } from "../../../../common/enums/AuthProvider";
import { useNotification } from "../../../../hooks/useNotification";
import { useTranslation } from "../../../../common/i18n/hooks/useTranslation";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../../../router/Routes";

export interface RegisterContext {
  state: RegisterState;
  handleAuthProviderChange: (authProvider: AuthProvider | null) => void;
  handleEmailChange: (email: string) => void;
  handlePasswordChange: (email: string) => void;
  handleFamilyNameChange: (email: string) => void;
  handleGivenNameChange: (email: string) => void;
  handleGenderChange: (gender: RegisterRequestDto.gender) => void;
  handleRegister: () => void;
  isEmailValid: boolean;
}

const registerContext = createContext<RegisterContext | null>(null);

export function RegisterProvider(props: {
  children: React.ReactNode;
}): React.ReactElement {
  const [state, dispatch] = useReducer(registerReducer, initialRegisterState);
  const registerMutation = useRegisterMutation();
  const { setIsLoading } = useLoading();
  const { validateEmail } = useValidator();
  const translate = useTranslation();
  const { showSuccess, showError } = useNotification();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(registerMutation.isPending);
  }, [setIsLoading, registerMutation.isPending]);

  const handleRegister = () => {
    registerMutation.mutate(
      {
        email: state.email,
        password: state.password,
        familyName: state.familyName,
        givenName: state.givenName,
        gender: state.gender,
      },
      {
        onSuccess() {
          showSuccess(translate("registration_success"));
          navigate(LOGIN_ROUTE);
        },
        onError(error: any) {
          showError(error.body.detail);
        }
      }
    );
  };

  const handleAuthProviderChange = (authProvider: AuthProvider | null) => {
    dispatch({
      type: "SET_AUTH_PROVIDER",
      payload: authProvider,
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

  const isEmailValid = validateEmail(state.email);

  return (
    <registerContext.Provider
      value={{
        state,
        handleAuthProviderChange,
        handleEmailChange,
        handlePasswordChange,
        handleFamilyNameChange,
        handleGivenNameChange,
        handleGenderChange,
        handleRegister,
        isEmailValid,
      }}
    >
      {props.children}
    </registerContext.Provider>
  );
}

export const useRegisterContext = () => {
  const context = useContext(registerContext);
  if (!context) {
    throw new Error("useRegister must be used within a RegisterProvider");
  }
  return context;
};
