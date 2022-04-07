import Router from "next/router";
import React from "react";
import GoogleLogin from "react-google-login";

function Login(props) {
  const handleLoginGoogle = (res) => {
    console.log(res);
    Router.push("/");
  };
  const handleError = (err) => {
    alert("Error: ", err);
  };
  return (
    <div>
      <GoogleLogin
        clientId={
          "241209180407-4lak3hj98vs3s441heh6v3dq13mupqo4.apps.googleusercontent.com"
        }
        buttonText="Login with Google"
        onSuccess={handleLoginGoogle}
        onFailure={handleError}
        cookiePolicy={"single_host_origin"}
      />
      ,
    </div>
  );
}

export default Login;
