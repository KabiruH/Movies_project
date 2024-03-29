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

                <div
  class="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <div
    class="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
    Featured
  </div>
  <div class="p-6">
    <h5
      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      Special title treatment
    </h5>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      With supporting text below as a natural lead-in to additional
      content.
    </p>
    <button
      type="button"
      class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init
      data-te-ripple-color="light">
      Button
    </button>
  </div>
  <div
    class="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
    2 days ago
  </div>
</div>
    </div>

  );
};

export default MovieCard;