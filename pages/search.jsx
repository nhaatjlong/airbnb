import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchResult from "../components/SearchResult";

function SearchPage({ dataSearch }) {
  const router = useRouter();
  const { location, noOfGuests } = router.query;
  return (
    <React.Fragment>
      <div>
        <Head>
          <title>
            {location} | {noOfGuests} guests | Airbnb
          </title>
        </Head>
      </div>
      <div>
        <Header />
        <SearchResult dataSearch={dataSearch} />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export async function getServerSideProps(ctx) {
  const dataSearch = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      dataSearch,
    },
  };
}

export default SearchPage;
