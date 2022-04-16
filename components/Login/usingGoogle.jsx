import Router from "next/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import { handleAuthenticated } from "../../redux/slice/auth";
import LoadingContainer from "../../containers/loading";
const LoginWithGoogle = () => {
  const dispatch = useDispatch();
  const { handleLoadingGlobal } = LoadingContainer.useContainer();

  const handleLogin = (res) => {
    localStorage.setItem("airbnb", JSON.stringify(res));
    dispatch(handleAuthenticated());
    handleLoadingGlobal(false);
  };
  const handleError = (err) => {
    alert("Error: Có lỗi xảy ra", err);
  };
  return (
    <GoogleLogin
      clientId={process.env.client_id_google}
      buttonText="Login with Google"
      onSuccess={handleLogin}
      onFailure={handleError}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default LoginWithGoogle;
