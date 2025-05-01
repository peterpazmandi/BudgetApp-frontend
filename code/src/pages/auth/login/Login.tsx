import { Suspense } from "react";
import Layout from "../../../components/Layout";
import AuthFrame from "../AuthFrame";
import ButtonInvert from "../../../components/ButtonInvert";
import H1 from "../../../components/H1";
import LoginForm from "./components/LoginForm";
import { LoginProvider } from "./context/LoginContext";
import { useNavigate } from "react-router-dom";
import { REGISTER_ROUTE } from "../../../router/Routes";
import { useTranslation } from "../../../common/i18n/hooks/useTranslation";

const Login = () => {
  const navigate = useNavigate();
  const translate = useTranslation();

  const handleRegisterButtonClick = () => {
    navigate(REGISTER_ROUTE);
  };
  
  const leftContent = (
    <>
      <H1 text={translate("auth_hello_friend")} className="pb-20 text-slate-200" />
      <p className="text-slate-200">{translate("auth_register_text1")}</p>
      <p className="text-slate-200 pb-20">{translate("auth_register_text2")}</p>
      <ButtonInvert onClick={handleRegisterButtonClick}>{translate("auth_register")}</ButtonInvert>
    </>
  );

  const rightContent = (
    <>
      <H1 text={translate("auth_welcome_back")} className="color-text-primary" />
      <div className="mt-20">
        <LoginForm />
      </div>
    </>
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginProvider>
        <Layout hideAppBar>
          <AuthFrame leftContent={leftContent} rightContent={rightContent} />
        </Layout>
      </LoginProvider>
    </Suspense>
  );
};

export default Login;
