import { useState, useEffect } from "react";
import axios from "axios";
import { Table, TD } from "../styles/Globals";
import ReactTooltip from "react-tooltip";
import { AiFillInfoCircle } from "react-icons/ai";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

interface ILocationData {
  asn: string;
  city: string;
  countryName: string;
  countryPopulation: number;
  countryTld: string;
  ip: string;
  org: string;
  postCode: string;
  region: string;
  version: string;
}

interface ICoords {
  lat: number;
  lng: number;
}

function Location(): JSX.Element {
  const [mapCoords, setMapCoords] = useState<ICoords>({
    lat: 0,
    lng: 0,
  });

  const [tooltip, showTooltip] = useState<boolean>(true);

  const [locationData, setLocationData] = useState<ILocationData>({
    asn: "", // Autonomous Name System
    city: "",
    countryName: "",
    countryPopulation: 0,
    countryTld: "", //Top Level Domain
    ip: "",
    org: "",
    postCode: "",
    region: "",
    version: "",
  });

  useEffect(() => {
    axios.get("https://ipapi.co/json/").then((res) => {
      setLocationData({
        asn: res.data.asn,
        city: res.data.city,
        countryName: res.data.country_name,
        countryPopulation: res.data.country_population,
        countryTld: res.data.country_tld,
        ip: res.data.ip,
        org: res.data.org,
        postCode: res.data.postal,
        region: res.data.region_code,
        version: res.data.version,
      });
      setMapCoords({ lng: res.data.longitude, lat: res.data.latitude });
    });
  }, []);

  const {
    asn,
    city,
    countryName,
    countryPopulation,
    countryTld,
    ip,
    org,
    postCode,
    region,
    version,
  } = locationData;

  const containerStyle = {
    width: "20rem",
    height: "20rem",
    margin: "auto",
    border: "2px solid black",
    borderRadius: "2rem",
  };

  return (
    <>
      <Table>
        <tbody>
          {asn ? (
            <tr>
              <th
                data-tip="Autonomous Name System, a globally unique identifier that defines a group of one or more IP prefixes run by one or more network operators that maintain a single, clearly-defined routing policy."
                onMouseEnter={() => showTooltip(true)}
                onMouseLeave={() => {
                  showTooltip(false);
                  setTimeout(() => showTooltip(true), 50);
                }}
                style={{ width: "40%", margin: "auto" }}
              >
                <AiFillInfoCircle />
                {tooltip && <ReactTooltip effect="solid" />}ASN:
              </th>
              <TD>{asn}</TD>
            </tr>
          ) : null}

          {city ? (
            <tr>
              <th>City:</th>
              <TD>{city}</TD>
            </tr>
          ) : null}

          {countryName ? (
            <tr>
              <th>Country Name:</th>
              <TD>{countryName}</TD>
            </tr>
          ) : null}

          {countryPopulation ? (
            <tr>
              <th>Country Population:</th>
              <TD>{countryPopulation}</TD>
            </tr>
          ) : null}

          {countryTld ? (
            <tr>
              <th
                data-tip="A top-level domain is one of the domains at the highest level in the hierarchical Domain Name System of the Internet after the root domain."
                onMouseEnter={() => showTooltip(true)}
                onMouseLeave={() => {
                  showTooltip(false);
                  setTimeout(() => showTooltip(true), 50);
                }}
                style={{ width: "40%", margin: "auto" }}
              >
                <AiFillInfoCircle />
                Country TLD:
              </th>
              <TD>{countryTld}</TD>
            </tr>
          ) : null}

          {org ? (
            <tr>
              <th>Organisation:</th>
              <TD>{org}</TD>
            </tr>
          ) : null}

          {ip ? (
            <tr>
              <th>IP Address:</th>
              <TD>{ip}</TD>
            </tr>
          ) : null}

          {postCode ? (
            <tr>
              <th>Post Code:</th>
              <TD>{postCode}</TD>
            </tr>
          ) : null}

          {region ? (
            <tr>
              <th>Region:</th>
              <TD>{region}</TD>
            </tr>
          ) : null}

          {version ? (
            <tr>
              <th>Version:</th>
              <TD>{version}</TD>
            </tr>
          ) : null}
        </tbody>
      </Table>
      <br />
      <br />
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      >
        <GoogleMap
          center={mapCoords}
          zoom={15}
          mapContainerStyle={containerStyle}
        >
          {/* Child components, such as markers, info windows, etc. */}
        </GoogleMap>
      </LoadScript>
      <br />
    </>
  );
}

export default Location;
