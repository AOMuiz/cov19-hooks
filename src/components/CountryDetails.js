import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import Icon from "@mdi/react";
import { mdiFaceMask, mdiHeartFlash, mdiBed, mdiVirus } from "@mdi/js";

import "./Cases.css";

const CountryDetails = () => {
  const { name } = useParams();

  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const { data, isPending, error } = useFetch(
    `https://disease.sh/v3/covid-19/countries/${name}`
  );

  const [country, setCountry] = useState(null);

  useEffect(() => {
    setCountry(data);
  }, [country, data]);

  console.log(name);

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {country && (
        <section className="cases">
          <h1>hello</h1>
          <h1>{country.country} hello</h1>
          <img
            src={`${country.countryInfo.flag}`}
            alt="flag"
            className="flag"
          />
          <div className="case">
            <div className="title__container">
              <p className="cases__Title">Total Cases</p>
              <Icon path={mdiVirus} size={1} />
            </div>

            <h3 className="cases__count">{numberWithCommas(country.cases)}</h3>
            <p className="cases__updated">last updated: 6/1/2021, 7:21 AM</p>
          </div>
          <div className="case gradient-style-2">
            <div className="title__container">
              <p className="cases__Title">Total Recovered</p>
              <Icon path={mdiHeartFlash} size={1} />
            </div>
            <h3 className="cases__count">
              {numberWithCommas(country.recovered)}
            </h3>
            <p className="cases__updated">last updated: 6/1/2021, 7:21 AM</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default CountryDetails;
