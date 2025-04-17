import { Suspense } from "react";

const Register = () => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginProvider>
        <Layout hideAppBar>
          <AuthFrame leftContent={leftContent} rightContent={rightContent} />
        </Layout>
      </LoginProvider>
    </Suspense>
  );
  )
}

export default Register