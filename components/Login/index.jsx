import React from "react";
import { ErrorMessage, FastField, Field, Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { initialValues, validationLogin } from "./validationLogin";
import LoginWithGoogle from "./usingGoogle";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slice/auth";

function Login(props) {
  const dispatch = useDispatch();

  const handleSubmitform = (formValue) => {
    console.log(formValue);
    dispatch(login(formValue));
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-lg px-10 py-5 hover:scale-105 transition ease-linear">
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
                  <div
                    onClick={() =>
                      handleSubmitform({
                        email: "user02@demo.com",
                        password: "123123",
                      })
                    }
                    className="bg-red-400 text-white px-4 py-2 mt-10 cursor-pointer rounded-lg hover:bg-red-600"
                  >
                    Start testing without login
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
        <br />
      </div>
    </div>
    // <section className="grid grid-cols-1 gap-0 lg:grid-cols-10 ">
    //   <div className="col-span-1 lg:col-span-6">
    //     <img
    //       src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
    //       alt="3 women looking at a laptop"
    //       className="object-cover w-full max-h-[100%] "
    //       loading="lazy"
    //     />
    //   </div>
    //   <div className="w-full col-span-1 p-4 mx-auto mt-6 lg:col-span-4 xl:p-12 sm:w-2/4 lg:w-full">
    //     <h1 className="mt-6 mb-4 text-xl font-light text-left text-gray-800">
    //       Log in to your account
    //     </h1>
    //     <Formik
    //       className="pb-1 space-y-4"
    //       initialValues={initialValues}
    //       validationSchema={validationLogin}
    //       onSubmit={handleSubmitform}
    //     >
    //       {() => (
    //         <Form>
    //           <label className="block">
    //             <span className="block mb-1 text-xs font-medium text-gray-700">
    //               Your Email
    //             </span>
    //             <FastField
    //               className="form-input"
    //               type="email"
    //               placeholder="Ex. james@bond.com"
    //               inputMode="email"
    //               name="email"
    //               required
    //             />
    //           </label>
    //           <label className="block">
    //             <span className="block mb-1 text-xs font-medium text-gray-700">
    //               Your Password
    //             </span>
    //             <FastField
    //               className="form-input"
    //               type="password"
    //               placeholder="••••••••"
    //               required
    //               name="password"
    //             />
    //           </label>
    //           <div className="flex items-center justify-between">
    //             <label className="flex items-center">
    //               <input
    //                 type="checkbox"
    //                 className="form-checkbox text-red-400 active:border-none"
    //               />
    //               <span className="block ml-2 text-xs font-medium text-gray-700 cursor-pointer">
    //                 Remember me
    //               </span>
    //             </label>
    //             <FastField
    //               type="submit"
    //               className="btn bg-red-400 text-white"
    //               value="Login"
    //             />
    //           </div>
    //         </Form>
    //       )}
    //     </Formik>
    //     <div className="my-6 space-y-2">
    //       <p className="text-xs text-gray-600">
    //         Don't have an account?
    //         <Link href="/register">
    //           <a className="text-red-400 hover:text-black">Create an account</a>
    //         </Link>
    //       </p>
    //       <a href="#" className="block text-xs text-red-400 hover:text-black">
    //         Forgot password?
    //       </a>
    //       <a href="#" className="block text-xs text-red-400 hover:text-black">
    //         Privacy & Terms
    //       </a>
    //     </div>
    //   </div>
    // </section>
  );
}

export default Login;
