// import React, { useState } from "react";
// import Scroll from "./Scroll";
// import SearchList from "./SearchList";
// import Icon from "@mdi/react";
// import { mdiSearchWeb } from "@mdi/js";
import "./Search.css";

function Search({ details }) {
  return (
    <div class="sb-example-1">
      <div class="search">
        <input
          type="text"
          class="searchTerm"
          placeholder="What are you looking for?"
        />
        {/* <button type="submit" class="searchButton">
          <Icon className="searchIcon" path={mdiSearchWeb} size={0.8} />
        </button> */}
      </div>
    </div>
  );
}

export default Search;
