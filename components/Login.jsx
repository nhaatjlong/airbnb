import Router from "next/router";
import React from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { useContainer } from "unstated-next";
import AuthContainer from "../containers/auth";

function Login(props) {
  const { setIsAuthenticated } = AuthContainer.useContainer();

  const handleLoginGoogle = (res) => {
    localStorage.setItem("airbnb", JSON.stringify(res));
    setIsAuthenticated(res);
    Router.push("/");
  };
  const handleError = (err) => {
    alert("Error: ", err);
  };

  const logout = (res) => {
    alert(res);
    localStorage.removeItem("airbnb");
  };
  return (
    <>
      <GoogleLogin
        clientId={process.env.client_id_google}
        buttonText="Login with Google"
        onSuccess={handleLoginGoogle}
        onFailure={handleError}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
}

export default Login;
