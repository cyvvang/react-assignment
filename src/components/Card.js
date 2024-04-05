import React, { useState } from 'react';
import { LuHeart } from 'react-icons/lu';

function Card({ release, img, title, artist, url, isFavorite, onFavoriteClick }) {
  
  const [iconColor, setIconColor] = useState(isFavorite ? "#f74a49" : "");

  const handleHeartClick = () => {
    const newFavoriteState = !isFavorite;
    setIconColor(newFavoriteState ? "#f74a49" : "");
    onFavoriteClick(url, newFavoriteState);
  };

  return (
    <section className='card'>
      <div className='row'>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <p className='release'>{release}</p>
        </a>  
        <LuHeart
          className="heart-icon"
          onClick={handleHeartClick}
          style={{ fill: iconColor, color: iconColor }}
        />
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className='img-container'>
          <img src={img} alt={`${title} - ${artist}`} />
        </div>
        <div className="song-details">
          <p className="title">{title}</p>
          <p className='artist'>{artist}</p>
        </div>
      </a>
    </section>
  );
}

export default Card;
