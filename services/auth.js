import axiosClient from "../api/axiosClient";
import Cookies from "js-cookie";

const register = async (username, email, password) => {
  return axiosClient.post("/user/" + "register", {
    username,
    email,
    password,
  });
};

const login = async (email, password) => {
  return axiosClient
    .post("/user/" + "login", {
      email,
      password,
    })
    .then((res) => {
      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem("airbnb");
  Cookies.remove("airbnb");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
