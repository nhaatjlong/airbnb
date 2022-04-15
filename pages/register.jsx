import React from "react";
import RegisterForm from "../components/Register";
import Head from "next/head";

function RegisterPage(props) {
  return (
    <div>
      <Head>
        <title>Register | Airbnb</title>
      </Head>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
