import { useTranslation } from "../../../../common/i18n/hooks/useTranslation";
import DividerWithText from "../../../../components/DividerWithText";
import InputField from "../../../../components/InputField";
import { useRegisterContext } from "../context/RegisterContext";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import FaceBookButton from "../../../../components/button/FaceBookButton";
import GoogleButton from "../../../../components/button/GoogleButton";

const AuthProviderSelector = () => {
  const translate = useTranslation();
  const { state, handleEmailChange } = useRegisterContext();

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
      <div className="mt-10 mb-10">
        <DividerWithText text={translate("or")} />
      </div>
      <div className="grid grid-cols-2 gap-20 mt-10">
        <div className="flex justify-end">
          <FaceBookButton />
        </div>
        <div className="flex justify-start">
          <GoogleButton />
        </div>
      </div>
    </>
  );
};

export default AuthProviderSelector;
