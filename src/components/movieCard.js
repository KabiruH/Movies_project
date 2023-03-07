import React from 'react';

const MovieCard = ({ movies }) => {

  return (


    <div>

      {movies.map((movie) =>
        <div key={movie.id} >
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <p>{movie.year}</p>
        </div>
      )}

    </div>
  );
};

export default MovieCard;