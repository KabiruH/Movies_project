import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Homepage from "./homepage";





function Navbar({ onSearch }) {

  const navigate = useNavigate()
  const [query, setQuery] = useState('');

  function handleSearch(query) {
    fetch(`https://movies-backend3.onrender.com/movies/search?query=${query}`)
      .then((response) => response.json())
      .then((results) => {
        setQuery(results)
        navigate("/moviesList")
      })
  }

  return (
    <div>
      <nav class="navbar bg-dark">
        <div class="container-fluid">
          <Link to="/">
            <button class="btn btn-outline-success"> <h1 className="title">Binge Movieflix</h1></button></Link>
          <form class="d-flex" role="search">
            <input class="form-control me-2" value={query} onChange={e => setQuery(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit" onClick={e => handleSearch(e)}>Search</button>
          </form>
        </div>
        <Link to="/register"><button class="btn btn-success">Register Here</button></Link> <br />
        <br />
        <Link to="/login"><button class="btn btn-success">Sign In Here</button></Link>
      </nav>
      <Homepage />
    </div>
  )
}

export default Navbar