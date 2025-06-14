import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import ButtonInvert from "../../../../components/ButtonInvert";
import InputField from "../../../../components/InputField";
import { useLoginContext } from "../context/LoginContext";
import { useTranslation } from "../../../../common/i18n/hooks/useTranslation";

const LoginForm = () => {
  const translate = useTranslation();
  const { state, handleEmailChange, handlePasswordChange, handleLogin } =
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
      />
      <ButtonInvert onClick={handleLogin} className="mt-20">
        {translate("auth_login")}
      </ButtonInvert>
    </>
  );
};

export default LoginForm;
