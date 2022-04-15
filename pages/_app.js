import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import PlaceHolderContainer from "../containers/placeHoder";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import AuthContainer from "../containers/auth";
import store from "../redux/store";
import { Provider } from "react-redux";
import LoadingContainer from "../containers/loading";
import MyLoading from "../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  // const { loadingGlobal } = LoadingContainer.useContainer();

  return (
    <LoadingContainer.Provider>
      <Provider store={store}>
        <PlaceHolderContainer.Provider>
          <AuthContainer.Provider>
            <MyLoading />
            <ToastContainer
              position="top-left"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Component {...pageProps} />
          </AuthContainer.Provider>
        </PlaceHolderContainer.Provider>
      </Provider>
    </LoadingContainer.Provider>
  );
}
export default MyApp;
