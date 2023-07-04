import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


//add a movie
function AddMovie(e) {
    

    const navigate = useNavigate("")
    const [mov_title, SetMov_title] = useState("")
    const [mov_year, SetMov_year] = useState("")
    const [mov_description, SetMov_desc] = useState("")
    

   
    function handleAdd(e) {
        e.preventDefault()
    
    fetch('https://movies-backend3.onrender.com/create', {
    method: 'POST',
    body: JSON.stringify({
        title: mov_title,
        year: mov_year,
        description: mov_description,
       
    })
    })
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        navigate("/moviesList")
    })
    .catch(error => console.error(error))
    }

    return (
        <div className="form-row align-items-center">
        <form className="container" 
            onSubmit={e => handleAdd(e)}>
            <label>Title</label> <br/>
            <input type="text" placeholder="Enter title" value={mov_title} onChange={e => SetMov_title(e.target.value)} required></input> <br/>
            <label>Year</label> <br/>
            <input type="number" placeholder="Enter year" value={mov_year} onChange={e => SetMov_year(e.target.value)} required></input> <br/>
            <label>Description</label> <br/>
            <input type="text" placeholder="Enter movie description" value={mov_description} onChange={e => SetMov_desc(e.target.value)} required></input> <br/>
            <br/>
            <input type="submit" class="btn btn-success"></input>
            
        </form>

        <form className="hero min-h-screen pr-40 bg-[url(https://images.hdqwalls.com/download/john-wick-chapter-4-minimal-5k-6n-1920x1080.jpg)]" 
    onSubmit={e => handleAdd(e)}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input type="text" value={mov_title} onChange={e => SetMov_title(e.target.value)} placeholder="Enter title" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">number</span>
              </label>
              <input type="number" value={mov_year} onChange={e => SetMov_year(e.target.value)} placeholder="Enter year" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input type="text" value={mov_description} onChange={e => SetMov_desc(e.target.value)} placeholder="Enter movie description" />
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary">Add Movie</input>
            </div>
          </div>
        </div>
      </div>
    </form>
        </div>
        
    )
}

export default AddMovie
