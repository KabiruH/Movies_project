import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Register from "./register";
import Login from "./login";



function Navbar() {



  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <h1 className="title">Binge Movieflix</h1>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <Register />
      <Login />
    </div>
  )
}

export default Navbar