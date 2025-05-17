import { RegisterRequestDto } from "../../../../api";
import { useTranslation } from "../../../../common/i18n/hooks/useTranslation";
import ButtonInvert from "../../../../components/ButtonInvert";
import InputField from "../../../../components/InputField";
import { RadioGroup } from "../../../../components/RadioGroup";
import { useRegister } from "../context/RegisterContext";
import {
  EnvelopeIcon,
  LockClosedIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";

const RegisterForm = () => {
  const translate = useTranslation();

  const {
    state,
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

      <InputField
        id="familyName"
        type="text"
        label={translate("auth_familyname")}
        value={state.familyName}
        setValue={function (value: string): void {
          handleFamilyNameChange(value);
        }}
        icon={<IdentificationIcon />}
      />

      <InputField
        id="givenName"
        type="text"
        label={translate("auth_givenname")}
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
        name={translate("auth_gender")}
      />

      <ButtonInvert onClick={handleRegister} className="mt-10">
        {translate("auth_register")}
      </ButtonInvert>
    </>
  );
};

export default RegisterForm;
