import { Suspense } from "react";
import AuthFrame from "./AuthFrame";
import Layout from "../../components/Layout";

const Login = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout hideAppBar>
        <AuthFrame />
      </Layout>
    </Suspense>
  );
};

export default Login;
