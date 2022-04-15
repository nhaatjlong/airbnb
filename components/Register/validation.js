import { validationLogin, initialValues } from "../Login/validationLogin";
import * as Yup from "yup";

export const initialValueRegis = {
  email: "",
  username: "",
  password: "",
  passwordConfirm: "",
};

export const validationRegis = Yup.object().shape({
  email: Yup.string().required("Required field").email("Email only"),
  username: Yup.string()
    .required("Required field")
    .min(5, "Min: 5")
    .max("25", "Max: 25"),
  password: Yup.string().required("Required field").min(3, "Min:3"),
  passwordConfirm: Yup.string()
    .required("Required field")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
