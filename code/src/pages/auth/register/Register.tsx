import { Suspense } from "react";
import { RegisterProvider } from "./context/RegisterContext";
import Layout from "../../../components/Layout";
import AuthFrame from "../AuthFrame";
import H1 from "../../../components/H1";
import ButtonInvert from "../../../components/ButtonInvert";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../../router/Routes";
import RegisterForm from "./components/RegisterForm";
import { useTranslation } from "../../../common/i18n/hooks/useTranslation";

const Register = () => {
  const navigate = useNavigate();
  const translate = useTranslation();

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
      <H1
        text={translate("auth_create_an_account")}
        className="color-text-primary"
      />
      <H1
        text={translate("auth_to_get_started")}
        className="color-text-primary"
      />
      <div className="mt-10">
        <RegisterForm />
      </div>
    </>
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterProvider>
        <Layout hideAppBar>
          <AuthFrame leftContent={leftContent} rightContent={rightContent} />
        </Layout>
      </RegisterProvider>
    </Suspense>
  );
};

export default Register;
