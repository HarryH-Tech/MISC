import axios from "axios";
import { useEffect } from "react";
import { Button } from "../styles/Home";

function HomePage() {
  useEffect(() => {
    axios
      .get("https://api.agify.io?name=harry")
      .then((res) => console.log(res));
  });

  return (
    <div>
      Home
      <Button>button</Button>
    </div>
  );
}

export default HomePage;
