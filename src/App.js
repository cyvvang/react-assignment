import './App.css';
import Sidebar from "./Sidebar/Sidebar";
import Navigation from "./Navigation/Nav";
import Songs from "./Songs/Songs";
import React, { useEffect, useState } from "react";
import Card from './components/Card';
import songs from "./db/data";

function App() {
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const [isFavoriteFilterActive, setIsFavoriteFilterActive] = useState(false);

  useEffect(() => {
    console.log(selectedYears, selectedTypes);
  }, [selectedYears, selectedTypes]);

  useEffect(() => {
    console.log(selectedArtist);
  }, [selectedArtist]);

  const handleYearClick = (year) => {
    if (selectedYears.includes(year)) {
      setSelectedYears([]);
    } else {
      setSelectedYears(year);
    }
  }

  const handleTypeClick = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes([]);
    } else {
      setSelectedTypes(type);
    }
  }

  const handleClearFilters = () => {
    setSelectedYears([]);
    setSelectedTypes([]);
    setSelectedArtist(null);
    setIsFavoriteFilterActive(false);
  };

  const handleChange = (event) => {
    setSelectedYears([]);
    setSelectedTypes([]);
    setSelectedArtist(event);
  }

  const handleFavoriteClick = (url) => {
    setFavoriteSongs(prevFavoriteSongs => {
      if (prevFavoriteSongs.includes(url)) {
        return prevFavoriteSongs.filter(songUrl => songUrl !== url);
      } else {
        return [...prevFavoriteSongs, url];
      }
    });
  }

  const applyFavoriteFilter = () => {
    setIsFavoriteFilterActive(prevState => !prevState);
  }

  function filteredData(songs, selectedYears, selectedTypes, selectedArtist) {
    let filteredSongs = songs;

    if (selectedYears.length > 0 || selectedTypes.length > 0) {
      filteredSongs = filteredSongs.filter(({ year, songType }) =>
        (selectedYears.length === 0 || selectedYears.includes(year)) &&
        (selectedTypes.length === 0 || selectedTypes.includes(songType))
      );
    }

    if (selectedArtist) {
      filteredSongs = filteredSongs.filter(({ artist }) => artist === selectedArtist);
    }

    if (isFavoriteFilterActive) {
      filteredSongs = filteredSongs.filter(({ url }) => favoriteSongs.includes(url));
    }

    return filteredSongs.map(
      ({ release, img, title, artist, songType, url }) => (
        <Card
          key={url}
          release={release}
          img={img}
          title={title}
          artist={artist}
          songType={songType}
          url={url}
          isFavorite={favoriteSongs.includes(url)}
          onFavoriteClick={handleFavoriteClick}
        />
      )
    );
  }

  const result = filteredData(songs, selectedYears, selectedTypes, selectedArtist);

  return (
    <div className="App">
      <Sidebar handleChange={handleChange} applyFavoriteFilter={applyFavoriteFilter} handleClearFilters={handleClearFilters}/>
      <Navigation
        handleYearClick={handleYearClick}
        handleTypeClick={handleTypeClick}
        handleClearFilters={handleClearFilters}
      />
      <Songs result={result} />
    </div>
  );
}

export default App;