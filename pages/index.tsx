import type { NextPage } from "next";

import Coopilot from "./Coopilot";
import SearchName from "./SearchName";
import Location from "./Location";
import GraphQL from "./GraphQL";

import { globalStyles } from "../styles/Globals";

const Home: NextPage = () => {
  globalStyles();
  return (
    <>
      <SearchName />
      <GraphQL />
      <Location />
      <Coopilot />
    </>
  );
};

export default Home;
