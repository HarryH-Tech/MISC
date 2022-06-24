import type { NextPage } from "next";

import Coopilot from "./Coopilot";
import SearchName from "./SearchName";
import Location from "./Location";

import { globalStyles } from "../styles/Globals";

const Home: NextPage = () => {
  globalStyles();
  return (
    <>
      <SearchName />
      <Location />
      <Coopilot />
    </>
  );
};

export default Home;
