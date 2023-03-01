import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Homepage from "./homepage";



function Navbar() {



  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <Link class="btn btn-success"> <h1 className="title">Binge Movieflix</h1></Link>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
      <Homepage />
    </div>
  )
}

export default Navbar