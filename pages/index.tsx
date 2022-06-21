import type { NextPage } from "next";

import Header from "../components/Header";
import SearchName from "./SearchName";
import Location from "./Location";

import { globalStyles } from "../styles/Globals";

const Home: NextPage = () => {
  globalStyles();
  return (
    <>
      <Header />
      <SearchName />
      <Location />
    </>
  );
};

export default Home;
