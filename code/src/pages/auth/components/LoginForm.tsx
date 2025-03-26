import { useState } from "react";
import ButtonInvert from "../../../components/ButtonInvert";
import InputField from "../../../components/InputField";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/24/outline";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  return (
    <>
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
      <ButtonInvert className="mt-20">Login</ButtonInvert>
    </>
  );
};

export default LoginForm;
