import { Suspense } from "react";
import ButtonInvert from "../../components/ButtonInvert";
import Layout from "../../components/Layout";
import AuthFrame from "./AuthFrame";
import H1 from "../../components/h1";

const Login = () => {
  const rightContent = (
    <div className="items-center text-center">
      <H1 text="Welcome!" />
      <p className="text-slate-200">Do you have already registered?</p>
      <p className="text-slate-200 pb-20">Then login with your personal info</p>
      <ButtonInvert>Login</ButtonInvert>
    </div>
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout hideAppBar>
        <AuthFrame leftContent={rightContent} />
      </Layout>
    </Suspense>
  );
};

export default Login;
