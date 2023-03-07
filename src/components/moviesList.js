import React, { useState } from 'react';
import { Link } from "react-router-dom";
import MovieCard from './movieCard';



function MoviesList() {
    const [movies, setMovies] = useState([]);


    // all movies
    useState(() => {

        fetch("https://movies-backend3.onrender.com/movies")
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setMovies(data);
            })

    }, [])

    function handleDelete() { }



    function update() { }

    return (
        <div><Link to="/homepage"><button class="btn btn-success">Logout</button></Link>
            <button class="btn btn-success" onChange={handleDelete}>Delete</button>

            <button class="btn btn-success" onChange={update}>Update</button>
            <div className="container movies">

            <div className="movie-card">
                <MovieCard movies={movies}/> <br/>
              </div>



            </div>

        </div>
    )
}

export default MoviesList