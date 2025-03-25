import { useState } from "react";
import ButtonInvert from "../../../components/ButtonInvert";
import H1 from "../../../components/H1";
import InputField from "../../../components/InputField";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="items-center text-center">
      <H1 text="Welcome, back!" className="color-text-primary" />
      <InputField
        type="text"
        label="Email"
        value={email}
        setValue={function (value: string): void {
          setEmail(value);
        }}
      />
      <ButtonInvert>Login</ButtonInvert>
    </div>
  );
};

export default LoginForm;
