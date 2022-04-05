import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import PlaceHolderContainer from "../containers/placeHoder";
function MyApp({ Component, pageProps }) {
  return (
    <PlaceHolderContainer.Provider>
      <Header />
      <Component {...pageProps} />
      <div className="bg-gray-100">
        <Footer />
      </div>
    </PlaceHolderContainer.Provider>
  );
}
export default MyApp;
