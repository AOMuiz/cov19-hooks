import React from "react";

import Icon from "@mdi/react";
import {
  mdiFaceMask,
  mdiHeartFlash,
  mdiBed,
  mdiVirus,
  mdiCoffin,
} from "@mdi/js";
import "./Card.css";

const Card = ({ country, index }) => {
  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div
      className="card gradient-style"
      key={`${country.countryInfo._id + index}`}
    >
      <h4 className="country-name">{country.country}</h4>
      <div className="flag_cases">
        <img src={`${country.countryInfo.flag}`} alt="flag" className="flag" />
        <div className="case-total">
          <p className="caseTitle">Total Cases</p>
          <p className="caseIcon">
            <Icon path={mdiVirus} size={1} className="icon-style" />
            {numberWithCommas(country.cases)}
          </p>
        </div>
      </div>
      <div className="country__case">
        <div className="case-text">
          <div className="icon">
            <Icon path={mdiHeartFlash} size={1} className="icon-style" />
          </div>
          <div className="caseOutput">
            <p className="caseTitle">Total Recovered</p>
            <p className="case-value">{numberWithCommas(country.recovered)}</p>
          </div>
        </div>
        <div className="case-text">
          <div className="icon">
            <Icon path={mdiBed} size={1} className="icon-style" />
          </div>
          <div>
            <p className="caseTitle">Active Cases</p>
            <p className="case-value">{numberWithCommas(country.active)}</p>
          </div>
        </div>
        <div className="case-text">
          <div className="icon">
            <Icon path={mdiFaceMask} size={1} className="icon-style" />
          </div>
          <div>
            <p className="caseTitle">New Cases</p>
            <p className="case-value">{numberWithCommas(country.todayCases)}</p>
          </div>
        </div>
        <div className="case-text">
          <div className="icon">
            <Icon path={mdiCoffin} size={1} className="icon-style" />
          </div>
          <div>
            <p className="caseTitle">Total Death</p>
            <p className="case-value">{numberWithCommas(country.deaths)}</p>
          </div>
        </div>
      </div>
      <p className="cases__updated">Last Updated: 6/1/2021, 7:21 AM</p>
    </div>
  );
};

export default Card;
