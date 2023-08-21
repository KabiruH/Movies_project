import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


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

      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">Binge Movies</Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              value={query}
              onChange={handleSearch}
              type="search"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto" />

          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://images.unsplash.com/photo-1566275542449-55f97f787d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span>new</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Navbar