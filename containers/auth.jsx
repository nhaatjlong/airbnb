import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";
import { reactLocalStorage } from "reactjs-localstorage";

function Authentication(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    localStorage.getItem("airbnb")
      ? setIsAuthenticated(JSON.parse(localStorage.getItem("airbnb")))
      : false;
  }, []);

  return {
    isAuthenticated,

    setIsAuthenticated,
  };
}

const AuthContainer = createContainer(Authentication);
export default AuthContainer;
