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
            <div class="container-lg">
                <p className="fs-4">Welcome to your home of movies, we got you, right after you sign in ...</p>
                <Link to="/addMovie"><button class="btn btn-success">Add Movies Here</button></Link>
                <Link to="/update"><button class="btn btn-success">Update Movies Here</button></Link>
            </div>
            
            <Routes>
                <Route path="/login" element= {<Login/>}></Route>
                <Route exact path="/addMovie" element= {<AddMovie/>}></Route>
                <Route path="/update" element= {<Update/>}></Route>
                <Route path="/register" element= {<Register/>}></Route>
                <Route path="/moviesList" element= {<MoviesList/>}></Route>
            </Routes>
            
        </div>
    )
}


export default Homepage
