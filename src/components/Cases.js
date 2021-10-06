import React from "react";
import Icon from "@mdi/react";
import { mdiFaceMask, mdiHeartFlash, mdiBed, mdiVirus } from "@mdi/js";
import "./Cases.css";

const Cases = ({ active, cases, newCases, recovered }) => {
  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <section className="cases">
      <div className="case">
        <div className="title__container">
          <p className="cases__Title">Total Cases</p>
          <Icon path={mdiVirus} size={1} />
        </div>

        <h3 className="cases__count">{numberWithCommas(cases)}</h3>
        <p className="cases__updated">last updated: 6/1/2021, 7:21 AM</p>
      </div>
      <div className="case gradient-style-2">
        <div className="title__container">
          <p className="cases__Title">Total Recovered</p>
          <Icon path={mdiHeartFlash} size={1} />
        </div>
        <h3 className="cases__count">{numberWithCommas(recovered)}</h3>
        <p className="cases__updated">last updated: 6/1/2021, 7:21 AM</p>
      </div>
      <div className="case seprate gradient-style">
        <div className="title__container">
          <p className="cases__Title">New Cases</p>
          <Icon className="icon-style" path={mdiFaceMask} size={1} />
        </div>
        <h3 className="cases__count">{newCases.toLocaleString()}</h3>
        <p className="cases__updated">last updated: 6/1/2021, 7:21 AM</p>
      </div>
      <div className="case seprate gradient-style">
        <div className="title__container">
          <p className="cases__Title">Active Cases</p>
          <Icon className="icon-style" path={mdiBed} size={1} />
        </div>
        <h3 className="cases__count">{numberWithCommas(active)}</h3>
        <p className="cases__updated">last updated: 6/1/2021, 7:21 AM</p>
      </div>
    </section>
  );
};

export default Cases;
