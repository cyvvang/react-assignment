import "./Nav.css";
import Buttons from "../components/Buttons";
import React from "react";

function Nav({ handleYearClick, handleTypeClick, handleClearFilters }) {
  return (
    <div className='top-nav'>
      <h1>Recent K-Pop Favorites ⋆ೀ˚⟡˖</h1>
      <div className="sort-row">
        <p className="large-text">Sort by</p>
        {/* <Buttons onClickHandler={handleClearFilters} title="Clear filters" /> */}
      </div>

      <div className="filter-container">
        <div className="col">
          <p className="filter-category">Year</p>
          <p className="filter-category">Song Type</p>
        </div>

        <div className="col">
          <div className='btn-row'>
            <Buttons onClickHandler={() => handleYearClick("2024")} title="2024" />
            <Buttons onClickHandler={() => handleYearClick("2023")} title="2023" />
            <Buttons onClickHandler={() => handleYearClick("2022")} title="2022" />
          </div>

          <div className='btn-row'>
            <Buttons onClickHandler={() => handleTypeClick("single")} title="Single"/>
            <Buttons onClickHandler={() => handleTypeClick("ep")} title="EP"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
