import * as Yup from "yup";

export const initialValues = {
  email: "",
  password: "",
};

export const validationLogin = Yup.object().shape({
  email: Yup.string()
    .required("Required field")
    .min(5, "Min 10")
    .max(40, "Max 40")
    .email("Email only"),
  password: Yup.string().required("Required field").min(3, "Min:3"),
});
