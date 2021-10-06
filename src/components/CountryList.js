import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useFetch from "../Hooks/useFetch";
import Scroll from "./Scroll";
import Card from "./Card";
import SubNav from "./SubNav";

function CountryList(props) {
  const { data, isPending, error } = useFetch(
    "https://disease.sh/v3/covid-19/countries"
  );

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(data);
  }, [countries, data]);

  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <SubNav />
      <Scroll>
        <div className="card-container">
          {countries &&
            countries.map((country, index) => (
              <Link to={`country/${country.country}`}>
                <Card country={country} index={index} />
              </Link>
            ))}
        </div>
      </Scroll>
    </>
  );
}

export default CountryList;
