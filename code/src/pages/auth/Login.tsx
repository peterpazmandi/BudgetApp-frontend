import { Suspense } from "react";
import ButtonInvert from "../../components/ButtonInvert";
import Layout from "../../components/Layout";
import AuthFrame from "./AuthFrame";

const Login = () => {
  const rightContent = (
    <div className="items-center text-center">
      <p className="pb-20 text-slate-200 text-4xl font-bold">Welcome!</p>
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
