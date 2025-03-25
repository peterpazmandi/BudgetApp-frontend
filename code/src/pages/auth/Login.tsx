import { Suspense } from "react";
import Layout from "../../components/Layout";
import AuthFrame from "./AuthFrame";
import ButtonInvert from "../../components/ButtonInvert";
import H1 from "../../components/H1";
import LoginForm from "./components/LoginForm";

const Login = () => {
  const leftContent = (
    <>
      <H1 text="Hello, Friend!" className="text-slate-200" />
      <p className="text-slate-200">Enter your personal details</p>
      <p className="text-slate-200 pb-20">and start journey with us</p>
      <ButtonInvert>Register</ButtonInvert>
    </>
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout hideAppBar>
        <AuthFrame leftContent={leftContent} rightContent={<LoginForm />} />
      </Layout>
    </Suspense>
  );
};

export default Login;
