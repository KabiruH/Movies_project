import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = { name, email, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Registration Successful!');
    };

    
    return (
        <form class="container">
            <h2>Register Here</h2>
            <div class="mb-3 col-lg-6">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3 col-lg-6">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="fs-6">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3 col-lg-6">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" />
            </div>

         <Link to="/login">   <button type="submit" onChange={handleSubmit} class="btn btn-success">Submit</button></Link>
        </form>
    )
}

export default Register