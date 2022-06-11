import React from "react";
import SearchResults from "./components/search-results/search-results.component";
import "./car-search.style.css";

export default function CarSearchScreen() {
  return (
    <div className="car-search screen background--blue">
      <div className="car-search__search-container background--yellow">
        <h2 className="car-search__header">Let’s find your ideal car</h2>
        <label className="car-search__label" htmlFor="car-search__search">
          Pick-up Location test
        </label>
        <SearchResults />
      </div>
    </div>
  );
}
