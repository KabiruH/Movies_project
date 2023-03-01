import React from "react"
import Register from "./register";
import Login from "./login";
import MoviesList from "./moviesList";
import { Link, Routes, Route } from "react-router-dom";

function Homepage() {


    return (
        <div >
            <div class="container-lg">
                <p className="fs-4">Welcome to your home of movies, we got you, right after you sign in ...</p>
                <Link to="/register"><button class="btn btn-success">Register Here</button></Link> <br/>
                <br/>
                <Link to="/login"><button class="btn btn-success">Sign In Here</button></Link>
            </div>

            <Routes>
                <Route path="/login" element= {<Login/>}></Route>
                <Route path="/register" element= {<Register/>}></Route>
                <Route path="/moviesList" element= {<MoviesList/>}></Route>
            </Routes>
        </div>
    )
}


export default Homepage
