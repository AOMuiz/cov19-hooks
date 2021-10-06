import React from "react";
import { Link } from "react-router-dom";
import "./subnav.css";
import Search from "./Search";
const SubNav = () => {
  return (
    <nav className="subnav">
      <ul className="subnav-list">
        <li className="subnav-list__item">
          <Link to="/all" className="">
            All
          </Link>
        </li>
        <li className="subnav-list__item">
          <Link to="/europe" className="">
            Europe
          </Link>
        </li>
        <li className="subnav-list__item">
          <Link to="/namerica" className="">
            N. America
          </Link>
        </li>
        <li className="subnav-list__item">
          <Link to="/asia" className="">
            Asia
          </Link>
        </li>
        <li className="subnav-list__item">
          <Link to="/samerica" className="">
            S. America
          </Link>
        </li>
        <li className="subnav-list__item">
          <Link to="/africa" className="">
            Africa
          </Link>
        </li>
        <li>
          <Search />
        </li>
      </ul>
    </nav>
  );
};

export default SubNav;
