import React from "react"
import Register from "./register";
import Login from "./login";
import MoviesList from "./moviesList";
import AddMovie from "./addMovie";
import Update from "./update";
import { Link, Routes, Route } from "react-router-dom";

function Homepage() {


    return (
        <div >
            <div className="hero min-h-screen bg-neutral-900 ">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">Immerse yourself in the magic of storytelling as you explore diverse genres and captivating narratives. From heartwarming dramas to pulse-pounding action flicks, we have something to captivate every movie lover's imagination.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route exact path="/addMovie" element={<AddMovie />}></Route>
                <Route path="/update" element={<Update />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/moviesList" element={<MoviesList />}></Route>
            </Routes>

        </div>
    )
}


export default Homepage
