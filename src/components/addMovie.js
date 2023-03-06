import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


//add a movie
function AddMovie(e) {
    

    const navigate = useNavigate()
    const [mov_title, SetMov_title] = useState("")
    const [mov_year, SetMov_year] = useState("")
    const [mov_desc, SetMov_desc] = useState("")
    

    fetch('http://127.0.0.1:9292/create', {
        method: 'POST',
        body: JSON.stringify({
            title: mov_title,
            year: mov_year,
            description: mov_desc,
            
        })
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            
        })
        .catch(error => console.error(error))

    return (
        <div class="form-row align-items-center">
        <form class="container" 
            onSubmit={e => AddMovie(e)}>
            <label>Title</label> <br/>
            <input type="text" placeholder="Enter title" value={mov_title} onChange={e => SetMov_title(e.target.value)} required></input> <br/>
            <label>Year</label> <br/>
            <input type="text" placeholder="Enter year" value={mov_year} onChange={e => SetMov_year(e.target.value)} required></input> <br/>
            <label>Description</label> <br/>
            <input type="text" placeholder="Enter movie description" value={mov_desc} onChange={e => SetMov_desc(e.target.value)} required></input> <br/>
            <input type="submit" class="btn btn-success"></input>
        </form>
        </div>
        
    )
}

export default AddMovie
