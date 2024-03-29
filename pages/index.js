import Head from "next/head";
import Banner from "../components/Banner";
import { LargeCard, MediumCard, SmallCard } from "../components/Card";
import styles from "../styles/Home.module.css";
import AuthContainer from "../containers/auth";
import { useContainer } from "unstated-next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../components/Login";
import { useSelector } from "react-redux";

export default function Home({ dataExplore, dataLiveAnywhere }) {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div className={styles.container}>
      <Head>
        <title>Airbnb</title>
        <meta
          name="description"
          content="Find vacation rentals, cabins, beach houses, unique homes and experiences around the world"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoggedIn ? (
        <>
          <Header />
          <Banner />
          <main className="max-w-7xl mx-auto px-5 sm:pl-15">
            <section className="">
              <h2 className="font-semibold text-3xl py-8">Explore nearby</h2>
              <div className="grid grid-cols-1 space-x-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                {dataExplore?.map((card, i) => {
                  return <SmallCard key={i} data={card} />;
                })}
              </div>
            </section>
            <section>
              <h2 className="font-semibold text-3xl py-8">Live anywhere</h2>
              <div className="flex items-center space-x-3 overflow-scroll scrollbar-hide">
                {dataLiveAnywhere?.map((live, i) => {
                  return <MediumCard key={i} data={live} />;
                })}
              </div>
            </section>
            <LargeCard
              data={{
                img: "https://links.papareact.com/4cj",
                title: "The greated outdoor",
                description: "Wishlists curated by Nhat Long",
                buttonText: "Go inspired",
              }}
            />
          </main>
          <div className="bg-gray-100">
            <Footer />
          </div>
        </>
      ) : (
        <div className="flex flex-row items-center">
          <Login />
        </div>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const dataExplore = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const dataLiveAnywhere = await fetch("https://links.papareact.com/zp1").then(
    (res) => res.json()
  );

  return {
    props: {
      dataExplore,
      dataLiveAnywhere,
    },
  };
}
