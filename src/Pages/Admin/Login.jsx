import React from "react";
import GoogleLogin from "react-google-login";

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  console.log(process.env.GOOGLE_CLIENT_ID);

  return (
    <GoogleLogin
      clientId={process.env.GOOGLE_CLIENT_ID}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      isSignedIn={true}
    />
  );
};

export default Login;
