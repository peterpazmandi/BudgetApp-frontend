import { useState } from "react";
import ButtonInvert from "../../../components/ButtonInvert";
import H1 from "../../../components/H1";
import InputField from "../../../components/InputField";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/24/outline";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="items-center text-center">
      <H1 text="Welcome, back!" className="color-text-primary" />
      <InputField
        id="email"
        type="text"
        label="Email"
        value={email}
        setValue={function (value: string): void {
          setEmail(value);
        }}
        icon={<EnvelopeIcon />}
      />
      <InputField
        id="password"
        type="password"
        label="Password"
        value={email}
        setValue={function (value: string): void {
          setEmail(value);
        }}
        icon={<LockClosedIcon />}
      />
      <ButtonInvert>Login</ButtonInvert>
    </div>
  );
};

export default LoginForm;
