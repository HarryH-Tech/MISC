import { useEffect } from "react";
import axios from "axios";

function Location() {
  useEffect(() => {
    axios.get("https://ipapi.co/json/").then((res) => console.log(res));
  });
  return <div></div>;
}

export default Location;
