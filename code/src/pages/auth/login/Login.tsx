import { Suspense } from "react";
import Layout from "../../../components/Layout";
import AuthFrame from "../AuthFrame";
import ButtonInvert from "../../../components/ButtonInvert";
import H1 from "../../../components/H1";
import LoginForm from "./components/LoginForm";
import { LoginProvider } from "./context/LoginContext";

const Login = () => {
  const leftContent = (
    <>
      <H1 text="Hello, Friend!" className="pb-20 text-slate-200" />
      <p className="text-slate-200">Enter your personal details</p>
      <p className="text-slate-200 pb-20">and start journey with us</p>
      <ButtonInvert>Register</ButtonInvert>
    </>
  );

  const rightContent = (
    <>
      <H1 text="Welcome, back!" className="color-text-primary" />
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
