
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Update() {

    const params = useParams();
    // console.log(params.id);


    const navigate = useNavigate()
    const [mov_title, SetMov_title] = useState("")
    const [mov_year, SetMov_year] = useState("")
    const [mov_desc, SetMov_desc] = useState("")


    function handleUpdate(e) {
        e.preventDefault()

        fetch(`https://movies-backend3.onrender.com/movies/update/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: mov_title,
                year: mov_year,
                description: mov_desc,

            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                navigate("/moviesList")
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="form-row align-items-center">
            <form className="container"
                onSubmit={e => handleUpdate(e)}>
                <label>Title</label> <br/>
                <input type="text" placeholder="Enter title" value={mov_title} onChange={e => SetMov_title(e.target.value)} required></input> <br />
                <label>Year</label> <br/>
                <input type="text" placeholder="Enter year" value={mov_year} onChange={e => SetMov_year(e.target.value)} required></input> <br />
                <label>Description</label> <br/>
                <input type="text" placeholder="Enter movie description" value={mov_desc} onChange={e => SetMov_desc(e.target.value)} required></input> <br />
                <br/>
                <input type="submit" class="btn btn-success"></input>

            </form>
        </div>
    )
}

export default Update;