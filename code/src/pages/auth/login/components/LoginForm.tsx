import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import ButtonInvert from "../../../../components/ButtonInvert";
import InputField from "../../../../components/InputField";
import { useLogin } from "../context/LoginContext";

const LoginForm = () => {
  const { state, handleEmailChange, handlePasswordChange, handleLogin } =
    useLogin();

  return (
    <>
      <InputField
        id="email"
        type="text"
        label="Email"
        value={state.email}
        setValue={function (value: string): void {
          handleEmailChange(value);
        }}
        icon={<EnvelopeIcon />}
      />
      <InputField
        id="password"
        type="password"
        label="Password"
        value={state.password}
        setValue={function (value: string): void {
          handlePasswordChange(value);
        }}
        icon={<LockClosedIcon />}
      />
      <ButtonInvert onClick={handleLogin} className="mt-20">Login</ButtonInvert>
    </>
  );
};

export default LoginForm;
