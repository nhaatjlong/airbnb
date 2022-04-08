import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import PlaceHolderContainer from "../containers/placeHoder";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import AuthContainer from "../containers/auth";

function MyApp({ Component, pageProps }) {
  const progress = new ProgressBar({
    color: "#FE595E",
    size: 2,
    className: "z-50",
    delay: 100,
  });

  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);
  Router.events.on("routeChangeError", progress.finish);

  return (
    <PlaceHolderContainer.Provider>
      <AuthContainer.Provider>
        <Component {...pageProps} />
      </AuthContainer.Provider>
    </PlaceHolderContainer.Provider>
  );
}
export default MyApp;
