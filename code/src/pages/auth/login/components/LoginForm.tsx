import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "../../../../common/i18n/hooks/useTranslation";
import InputField from "../../../../components/InputField";
import { useLoginContext } from "../context/LoginContext";

const LoginForm = () => {
  const translate = useTranslation();
  const { state, handleEmailChange, handlePasswordChange, handleLogin, isEmailValid, isPasswordValid } =
    useLoginContext();

  return (
    <>
      <InputField
        id="email"
        type="text"
        label={translate("auth_email")}
        value={state.email}
        setValue={function (value: string): void {
          handleEmailChange(value);
        }}
        icon={<EnvelopeIcon />}
      />
      
      <InputField
        id="password"
        type="password"
        label={translate("auth_password")}
        value={state.password}
        setValue={function (value: string): void {
          handlePasswordChange(value);
        }}
        icon={<LockClosedIcon />}
        onActionClick={function (): void {
          handleLogin();
        }}
        isValueValid={isEmailValid && isPasswordValid}
      />
    </>
  );
};

export default LoginForm;
