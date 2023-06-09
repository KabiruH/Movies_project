import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleAdd(e) {
        e.preventDefault()

        fetch('https://movies-backend3.onrender.com/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                password: password

            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                navigate("/login")
            })
            .catch(error => console.error(error))
    }

    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Here!</h1>
                    <p className="py-6"> Our register page provides you with the opportunity to unlock a world of captivating films, thrilling genres, and unforgettable performances. Join our vibrant community of movie enthusiasts, where you can discover, review, and share your favorite films with fellow cinephiles. </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">

                        <div className="form-control">
                            <label className="Name">
                                <span className="label-text">Username</span>
                            </label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="User Name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Login Here</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" onClick={e => handleAdd(e)} className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register