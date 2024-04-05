import React from 'react';
import Home from "./Home/Home";
import Favorites from "./Favorites/Favorites";
import Artist from "./Artist/Artist";
import "./Sidebar.css";

function Sidebar({ handleArtistChange, applyFavoriteFilter, handleClearFilters }) {
  return (
    <section className="side-bar">
      <div className='side-bar-content'>
        <Home onClickHandler={handleClearFilters} />
        <Favorites onClickHandler={applyFavoriteFilter} />
        <Artist onClickHandler={handleArtistChange} />
      </div>
    </section>
  );
}

export default Sidebar;
