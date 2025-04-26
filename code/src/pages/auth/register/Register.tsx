import { Suspense } from "react";
import { RegisterProvider } from "./context/RegsiterContext";
import Layout from "../../../components/Layout";
import AuthFrame from "../AuthFrame";
import H1 from "../../../components/H1";
import ButtonInvert from "../../../components/ButtonInvert";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../../router/Routes";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate(LOGIN_ROUTE);
  };
  
  const leftContent = (
    <>
      <H1 text="Welcome!" className="pb-20 text-slate-200" />
      <p className="text-slate-200">Do you have already registered?</p>
      <p className="text-slate-200 pb-20">Then login with your personal info</p>
      <ButtonInvert onClick={handleLoginButtonClick}>Login</ButtonInvert>
    </>
  );

  const rightContent = (
    <>
      <H1 text="Create an account" className="color-text-primary" />
      <H1 text="to get started." className="color-text-primary" />
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
}

export default Register