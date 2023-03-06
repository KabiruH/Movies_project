import React from 'react';

const MovieCard = ({ title, Releaseyear, Description }) => {
  
  return (
    <div className="movie-card">
      
      <div className="movie-info">
        <h2>{title}</h2>
        <p>Releaseyear: {Releaseyear}</p>
        <p>Description: {Description}</p>
      </div>
    </div>
  );
};

export default MovieCard;