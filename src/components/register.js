import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleAdd(e) {
        e.preventDefault()

    fetch('http://127.0.0.1:9292/auth/register', {
    method: 'POST',
    body: JSON.stringify({
        name: name,
        email: email,
        password: password
        
    })
    })
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        
    })
    .catch(error => console.error(error))
    }
    
    return (
        <form class="container" >
            <h2>Register Here</h2>
            <br/>
            <div class="mb-3 col-lg-6">
                <label for="Name" class="form-label">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control" required/>
            </div>
            <div class="mb-3 col-lg-6">
                <label for="Email" class="form-label">Email address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" required/>
                <div id="emailHelp" class="fs-6">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3 col-lg-6">
                <label for="Password" class="form-label">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" required/>
            </div>

            <button type="submit" class="btn btn-success" onSubmit={e => handleAdd(e)}>Submit</button>
            <Link to="/login"></Link>
        </form>
    )
}

export default Register