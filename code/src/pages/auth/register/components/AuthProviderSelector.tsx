import { useTranslation } from "../../../../common/i18n/hooks/useTranslation";
import DividerWithText from "../../../../components/DividerWithText";
import InputField from "../../../../components/InputField";
import { useRegister } from "../context/RegisterContext";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const AuthProviderSelector = () => {
  const translate = useTranslation();
  const { state, handleEmailChange } = useRegister();

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
      <DividerWithText text={translate("or")} />
    </>
  );
};

export default AuthProviderSelector;
