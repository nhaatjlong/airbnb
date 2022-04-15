import React, { useEffect } from "react";

import { ErrorMessage, FastField, Field, Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { initialValues, validationLogin } from "./validationLogin";
import LoginWithGoogle from "./usingGoogle";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slice/auth";
import LoadingContainer from "../../containers/loading";

function Login(props) {
  const { loadingGlobal, handleLoadingGlobal } =
    LoadingContainer.useContainer();
  const dispatch = useDispatch();

  const handleSubmitform = (formValue, action) => {
    const promise = new Promise((resolve) => {
      handleLoadingGlobal(true);
      dispatch(login(formValue));
      resolve();
    });
    promise.then(() => {
      // handleLoadingGlobal(false);
      console.log("promise then");
    });
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <div className="max-w-[300px] min-w-[230px]">
        <div className="relative h-[60px] w-full text-white mb-5">
          <Image src="/airbnb.png" alt="logo" layout="fill" />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationLogin}
          onSubmit={handleSubmitform}
        >
          {({ isSubmitting }) => {
            return (
              <Form className="space-y-2">
                <div className="">
                  <label
                    className="block text-red-400 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Field
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="email"
                    type="email"
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div>
                  <label
                    className="block text-red-400 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Field
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="password"
                    type="password"
                  />
                  <ErrorMessage name="password" component="div" />
                </div>
                <div className="py-2 flex flex-row justify-between">
                  <button
                    className="bg-red-400 cursor-pointer hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Login
                  </button>
                  <button className="inline-block align-baseline font-bold text-sm text-red-400 hover:text-red-500">
                    Forgot Password?
                  </button>
                </div>
                <div className="flex flex-col  items-center">
                  <Link href="/register">
                    <a className="text-red-500 pb-5">Be a member</a>
                  </Link>
                  <div className="mb-5 w-full  border-b border-b-gray-300"></div>
                  <LoginWithGoogle />
                </div>
              </Form>
            );
          }}
        </Formik>
        <br />
      </div>
    </div>
  );
}

export default Login;