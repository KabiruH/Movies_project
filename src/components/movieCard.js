import React from 'react';
import { Link } from "react-router-dom";

const MovieCard = ({ movies, handleDeleteMovie }) => {


  function handleDelete(id) {
    fetch(`https://movies-backend3.onrender.com/movies/destroy/${id}`, {
      method: "DELETE",
    })

    handleDeleteMovie(id)
  }

  return (
    <div className="movie-info">

      
        {movies.map((movie) =>
          <div key={movie.id} >
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>{movie.year}</p>
            {movie.first_fetched === false && (
              <button onClick={() => handleDelete(movie.id)}>Delete</button>
            )}
            {movie.first_fetched === false && (
              <Link to={`/update/${movie.id}`}>Update</Link>
            )}
          </div>
        )}
                      <Link to="/addMovie"><button class="btn btn-success">Add Movies Here</button></Link>
                <Link to="/update"><button class="btn btn-success">Update Movies Here</button></Link>
    </div>
  );
};

export default MovieCard;