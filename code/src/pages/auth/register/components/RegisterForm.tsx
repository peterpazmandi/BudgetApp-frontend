import { RegisterRequestDto } from "../../../../api";
import ButtonInvert from "../../../../components/ButtonInvert";
import InputField from "../../../../components/InputField";
import { RadioGroup } from "../../../../components/RadioGroup";
import { useRegister } from "../context/RegisterContext";
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";

const RegisterForm = () => {
  const {
    state,
    handleUsernameChange,
    handleEmailChange,
    handlePasswordChange,
    handleFamilyNameChange,
    handleGivenNameChange,
    handleGenderChange,
    handleRegister,
  } = useRegister();

  const genderOptions = [
    { label: "Male", value: RegisterRequestDto.gender.MALE },
    { label: "Female", value: RegisterRequestDto.gender.FEMALE },
  ];

  return (
    <>
      <InputField
        id="username"
        type="text"
        label="Username"
        value={state.username}
        setValue={function (value: string): void {
          handleUsernameChange(value);
        }}
        icon={<UserIcon />}
      />

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

      <InputField
        id="familyName"
        type="text"
        label="Family Name"
        value={state.familyName}
        setValue={function (value: string): void {
          handleFamilyNameChange(value);
        }}
        icon={<IdentificationIcon />}
      />

      <InputField
        id="givenName"
        type="text"
        label="Given Name"
        value={state.givenName}
        setValue={function (value: string): void {
          handleGivenNameChange(value);
        }}
        icon={<IdentificationIcon />}
      />

      <RadioGroup
        options={genderOptions}
        value={state.gender}
        onChange={(value) =>
          handleGenderChange(
            RegisterRequestDto.gender[
              value as keyof typeof RegisterRequestDto.gender
            ]
          )
        }
        name="Gender"
      />

      <ButtonInvert onClick={handleRegister} className="mt-10">
        Register
      </ButtonInvert>
    </>
  );
};

export default RegisterForm;
