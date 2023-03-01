import React from "react";
import { Link } from "react-router-dom";

function MoviesList () {

return (
   <div className="container movies">
    <Link to="/homepage"><button class="btn btn-success">Logout</button></Link>
   <p className="fs-4">Here's a list of movies we think you might be into!</p> 
   </div>
)

}

export default MoviesList