import React from "react"
import Register from "./register";
import Login from "./login";
import MoviesList from "./moviesList";
import { Link, Routes, Route } from "react-router-dom";

function Homepage() {


    return (
        <div >
            <div class="container-lg">
                <p>Welcome to your home of movies, we got you, right after you sign in here</p>
                <button class="btn btn-success mr-4">Register Here</button>
                <button class="btn btn-success mr-4">Sign In Here</button>
            </div>

            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register/*" element={<Register />}></Route>
                <Route path="/moviesList" element={<MoviesList />}></Route>
            </Routes>
        </div>
    )
}


export default Homepage
