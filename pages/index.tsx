import type { NextPage } from "next";

import Header from "../components/Header";
import HomePage from "../components/HomePage";
import SearchName from "../components/SearchName";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HomePage />
      <SearchName />
    </>
  );
};

export default Home;
