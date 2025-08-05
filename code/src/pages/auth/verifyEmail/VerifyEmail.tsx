import { useParams } from "react-router-dom";

const VerifyEmail = () => {
  const { token } = useParams<{ token: string }>();

  return (
    <>
      <div>Email Verification</div>
      {token ? (
        <p>Verifying token: {token}</p>
      ) : (
        <p>No verification token provided</p>
      )}
    </>
  );
};

export default VerifyEmail;
