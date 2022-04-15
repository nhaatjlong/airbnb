import { ErrorMessage, FastField, Field, Form, Formik } from "formik";
import Image from "next/image";
import Router from "next/router";
import React, { useState } from "react";
import { initialValueRegis, validationRegis } from "./validation";
import { register } from "../../redux/slice/auth";
import { useDispatch } from "react-redux";
import LoadingContainer from "../../containers/loading";
import { toast } from "react-toastify";

function RegisterForm(props) {
  const dispatch = useDispatch();
  const { loadingGlobal, handleLoadingGlobal } =
    LoadingContainer.useContainer();
  const handleSubmitform = (value) => {
    handleLoadingGlobal(true);
    const x = new Promise((resolve) => {
      const { username, email, password } = value;
      dispatch(register({ username, email, password }));
      resolve();
    });
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-lg px-10 py-5 hover:scale-105 transition ease-linear">
      <div className="max-w-[300px] min-w-[230px]">
        <div className="relative h-[60px] w-full text-white mb-5">
          <Image src="/airbnb.png" alt="logo" layout="fill" />
        </div>
        <Formik
          initialValues={initialValueRegis}
          validationSchema={validationRegis}
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
                  <FastField
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="email"
                    type="text  "
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div className="">
                  <label
                    className="block text-red-400 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <FastField
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="username"
                    type="text"
                  />
                  <ErrorMessage name="username" component="div" />
                </div>
                <div>
                  <label
                    className="block text-red-400 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <FastField
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="password"
                    type="password"
                  />
                  <ErrorMessage name="password" component="div" />
                </div>
                <div>
                  <label
                    className="block text-red-400 text-sm font-bold mb-2"
                    htmlFor="passwordConfirm"
                  >
                    Confirm password
                  </label>
                  <FastField
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="passwordConfirm"
                    type="password"
                  />
                  <ErrorMessage name="passwordConfirm" component="div" />
                </div>

                <div className="py-2 flex flex-row justify-between">
                  <button
                    className="bg-red-400 cursor-pointer hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Register
                  </button>
                  <button className="inline-block align-baseline font-bold text-sm text-red-400 hover:text-red-500">
                    Forgot Password?
                  </button>
                </div>
                <div className="flex flex-col  items-center">
                  <p
                    onClick={() => Router.back()}
                    className="text-red-400 cursor-pointer pb-4"
                  >
                    Back to login
                  </p>
                  <div className="mb-5 w-full  border-b border-b-gray-300"></div>
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

export default RegisterForm;
