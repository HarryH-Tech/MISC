import { useState, useEffect } from "react";
import axios from "axios";

// create an interface for the data
interface Data {
  id: number;
  name: string;
  founder: string;
  founded: number;
  employees: number;
  vehicles: number;
  launch_sites: number;
  test_sites: number;
  ceo: string;
}

const Coopilot = () => {
  // create a state for the search and set it equal to a type of string
  const [search, setSearch] = useState<string>("");

  // create a state called data and set it to an empty object of type Data
  const [data, setData] = useState<Data>({
    id: 0,
    name: "",
    founder: "",
    founded: 0,
    employees: 0,
    vehicles: 0,
    launch_sites: 0,
    test_sites: 0,
    ceo: "",
  });

  // fetch data from the API with axios and set it to the state and console.log it
  useEffect(() => {
    axios.get("https://api.spacexdata.com/v4/company").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  // destructure the data
  const {
    id,
    name,
    founder,
    founded,
    employees,
    vehicles,
    launch_sites,
    test_sites,
    ceo,
  } = data;

  // create a regex function to remove numbers from an input
  const removeNumbers = (str: string) => {
    return str.replace(/\d/g, "");
  };

  return (
    <>
      <div
        style={{
          color: "green",
          margin: "2rem auto",
          width: "50%",
          border: "5px solid pink",
          textAlign: "center",
          padding: "0.5rem",
        }}
      >
        <p>
          Everything on this page except this container and green text was
          written by{" "}
          <a href="https://github.com/features/copilot/" target="_blank">
            Github Coopilot
          </a>
          , it chose which API to get data from, rendered it out and created the
          regex function and input/button elements purely after I wrote comments
          telling it what to do!!!
        </p>
      </div>
      // create an input element and set it to state called search and create a
      button which removes numbers from the input
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setSearch(removeNumbers(search))}>
        Remove Numbers
      </button>
      //add 5 line breaks
      <br />
      <br />
      <br />
      <br />
      <br />
      // render the ceo in a right aligned container with a blue background and
      a red border
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: "blue",
          border: "2px solid red",
          padding: "10px",
          margin: "10px",
        }}
      >
        <h1>{ceo}</h1>
      </div>
      // render the data to the page and center it in red containers with a
      thick border
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>{name}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>{founder}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3>{founded}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3>{employees}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3>{vehicles}</h3>
          </div>
        </div>
      </div>
      // add 2 line breaks to separate the data
      <br />
      <br />
      // render the id to the page and add 1 to the id
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>{id + 1}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>{id + 2}</h2>
          </div>
        </div>
      </div>
      // render the name and color it blue and align it to the right
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 style={{ color: "blue" }}>{name}</h1>
          </div>
        </div>
      </div>
      // add 2 line breaks
      <br />
      <br />
      // render the founder and color it red and align it to the left
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 style={{ color: "red" }}>{founder}</h2>
          </div>
        </div>
      </div>
      // render the test_sites with a border and color it green
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ border: "1px solid green" }}>{test_sites}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coopilot;
