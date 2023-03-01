import React from "react";
import { Link } from "react-router-dom";

function MoviesList () {

return (
    <div><Link to="/homepage"><button class="btn btn-success">Logout</button></Link>
   <div className="container movies">
    
   <span><p className="fs-4 text-white bg-danger">Grab your popcorn, get ready to binge!</p> </span>
   </div>
   </div>
)
}

export default MoviesList