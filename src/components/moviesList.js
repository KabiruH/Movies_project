import React, { useState } from 'react';
import { Link } from "react-router-dom";
import MovieCard from './movieCard';



function MoviesList() {
    const [movies, setMovies] = useState([]);
    

    // all movies
    useState(() => {

        fetch("http://127.0.0.1:9292/movies")
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

            <ul > {movies.map(movie => <MovieCard title={movie.title}
                MovieCard Releaseyear={movie.year}
                Description={movie.description} />)} </ul>

        </div>

    </div>
)
}

export default MoviesList