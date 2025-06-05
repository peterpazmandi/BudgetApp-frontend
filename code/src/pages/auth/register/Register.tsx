import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../../../common/i18n/hooks/useTranslation";
import ButtonInvert from "../../../components/ButtonInvert";
import H1 from "../../../components/H1";
import Layout from "../../../components/Layout";
import { LOGIN_ROUTE } from "../../../router/Routes";
import AuthFrame from "../AuthFrame";
import AuthProviderSelector from "./components/AuthProviderSelector";
import RegisterForm from "./components/RegisterForm";
import { useRegisterContext } from "./context/RegisterContext";
import { AuthProvider } from "../../../common/enums/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const translate = useTranslation();
  const { state } = useRegisterContext();

  const handleLoginButtonClick = () => {
    navigate(LOGIN_ROUTE);
  };

  const leftContent = (
    <>
      <H1 text={translate("auth_welcome")} className="pb-20 text-slate-200" />
      <p className="text-slate-200">{translate("auth_login_text1")}</p>
      <p className="text-slate-200 pb-20">{translate("auth_login_text2")}</p>
      <ButtonInvert onClick={handleLoginButtonClick}>Login</ButtonInvert>
    </>
  );

  const rightContent = (
    <>
      {state.authProvider === null && (
        <>
          <H1
            text={translate("auth_create_an_account")}
            className="color-text-primary"
          />
          <H1
            text={translate("auth_to_get_started")}
            className="color-text-primary"
          />
        </>
      )}

      <div className="mt-10">
        {state.authProvider === null && <AuthProviderSelector />}
        {state.authProvider === AuthProvider.EMAIL && <RegisterForm />}
      </div>
    </>
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout hideAppBar>
        <AuthFrame leftContent={leftContent} rightContent={rightContent} />
      </Layout>
    </Suspense>
  );
};

export default Register;
