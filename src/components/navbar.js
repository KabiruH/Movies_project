import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Homepage from "./homepage";



function Navbar() {



  return (
    <div>
      <nav class="navbar bg-dark">
        <div class="container-fluid">
          <Link to = "/">
          <button class="btn btn-outline-success"> <h1 className="title">Binge Movieflix</h1></button></Link>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <Homepage />
     </div>
  )
}

export default Navbar