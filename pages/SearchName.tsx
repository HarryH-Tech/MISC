import { Container, Button } from "../styles/Globals";
import { SearchInput } from "../styles/SearchName";
import axios from "axios";
import { useState, useEffect, MouseEvent } from "react";
import Swal from "sweetalert2";
import ReactTooltip from "react-tooltip";
import { AiFillInfoCircle } from "react-icons/ai";

interface ISearchData {
  name: string;
  country: string;
}

interface INameInfo {
  name: string;
  age: number;
  countryId: string;
  count: number;
}

function SearchName(): JSX.Element {
  const [tooltip, showTooltip] = useState<boolean>(true);

  const [searchData, setSearchData] = useState<ISearchData>({
    name: "",
    country: "AF",
  });

  const [nameInfo, setNameInfo] = useState<INameInfo>({
    name: "",
    age: 0,
    countryId: "",
    count: 0,
  });

  const [countries, setCountries] = useState<string[]>([]);

  const { name, age, countryId, count } = nameInfo;

  // LOAD COUNTRY OPTIONS INTO SELECT ELEMENT ON INITIAL RENDER
  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/ssskip/5a94bfcd2835bf1dea52/raw/3b2e5355eb49336f0c6bc0060c05d927c2d1e004/ISO3166-1.alpha2.json"
      )
      .then((res) => {
        setCountries(res.data);
      });
  }, []);

  const fetchNameAge = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!searchData.name || !searchData.country) {
      Swal.fire({
        text: "Please ensure you have entered both the name and the country you wish to search for.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }

    axios
      .get(
        `https://api.agify.io?name=${searchData.name}&country_id=${searchData.country}`
      )
      .then((res) => {
        setNameInfo({
          name: res.data.name,
          count: res.data.count,
          countryId: res.data.country_id,
          age: res.data.age,
        });
        console.log(res.data);
      });
  };

  // WHEN USER SELECTS A COUNTRY, SET COUNTRY SEARCH VALUE EQUAL TO THE COUNTRY CODE
  const handleCountryChange = (e: any) => {
    //@ts-expect-error
    // TRY TO FIX LATER
    const countryCode: string = (
      Object.keys(countries) as (keyof typeof countries)[]
    ).find((key) => {
      return countries[key] === e.target.value;
    });
    setSearchData({ ...searchData, country: countryCode });
  };

  return (
    <>
      <Container>
        <SearchInput
          onChange={(e) =>
            setSearchData({ ...searchData, name: e.currentTarget.value })
          }
          type="text"
          value={searchData.name}
          placeholder="Enter A Name..."
        />
        <br /> <br />
        <select onChange={(e) => handleCountryChange(e)} defaultValue=" ">
          {countries
            ? Object.values(countries).map((country, index) => {
                return <option key={index}>{country}</option>;
              })
            : null}
        </select>
        <br />
        <Button onClick={(event) => fetchNameAge(event)}>Search</Button>
        {nameInfo ? (
          <div style={{ textAlign: "center" }}>
            {count ? (
              <p
                data-tip="The number of entries used to estimate the age of the name."
                onMouseEnter={() => showTooltip(true)}
                onMouseLeave={() => {
                  showTooltip(false);
                  setTimeout(() => showTooltip(true), 50);
                }}
                style={{ width: "40%", margin: "auto" }}
              >
                {tooltip && <ReactTooltip effect="solid" />}
                <AiFillInfoCircle /> Count: {count}
              </p>
            ) : (
              ""
            )}
            {age ? <p>Estimated Age: {age}</p> : ""}
          </div>
        ) : null}
      </Container>
    </>
  );
}

export default SearchName;
