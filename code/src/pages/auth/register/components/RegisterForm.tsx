import { RegisterRequestDto } from "../../../../api";
import { useTranslation } from "../../../../common/i18n/hooks/useTranslation";
import ButtonInvert from "../../../../components/ButtonInvert";
import InputField from "../../../../components/InputField";
import { RadioGroup } from "../../../../components/RadioGroup";
import { useRegisterContext } from "../context/RegisterContext";
import {
  EnvelopeIcon,
  LockClosedIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const RegisterForm = () => {
  const translate = useTranslation();

  const {
    state,
    handleAuthProviderChange,
    handleEmailChange,
    handlePasswordChange,
    handleFamilyNameChange,
    handleGivenNameChange,
    handleGenderChange,
    handleRegister,
  } = useRegisterContext();

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
      <div className="flex items-center justify-between cursor-pointer">
        <div className="group flex items-center" onClick={() => handleAuthProviderChange(null)}>
          <ArrowLeftIcon
            className={`w-5 mt-10 text-black dark:text-white group-hover:text-emerald-600 group-hover:scale-125 hover:cursor-pointer`}
          />
          <p className="color-text-primary group-hover:text-emerald-600 mt-10 ms-2">{translate("back")}</p>
        </div>
        <ButtonInvert onClick={handleRegister} className="mt-10">
          {translate("auth_register")}
        </ButtonInvert>
      </div>
    </>
  );
};

export default RegisterForm;
