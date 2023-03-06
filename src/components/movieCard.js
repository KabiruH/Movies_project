import React from 'react';

const MovieCard = ({ movies }) => {

  return (


    <div className="movie-card ">

      <ul>{movies.map((movie) =>
        <div key={movie.id} >
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <p>{movie.year}</p>
        </div>
      )}</ul> <br/>

    </div>
  );
};

export default MovieCard;