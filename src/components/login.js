import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault()

    fetch("https://movies-backend3.onrender.com/auth/login", {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Login success!") {
          alert(data.message)
          navigate("/moviesList")
        } else if (data.message === "Invalid email or password") {
          alert(data.message)
          navigate('/login')
        }
      })
  }


  return (

    <form className="hero min-h-screen pr-40 bg-[url(https://images.hdqwalls.com/download/john-wick-chapter-4-minimal-5k-6n-1920x1080.jpg)]" 
    onSubmit={e => handleSubmit(e)}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold rounded-xl text-center text-blue-400 ">Login now!</h1>
          <p className="py-6 bg-black rounded-xl text-center text-xl">Rediscover your favorite films, catch up on the latest releases, and explore new genres that cater to your unique tastes. Whether you're looking for action-packed blockbusters, heartwarming dramas, or thought-provoking documentaries, our login page is your ticket to a seamless and immersive movie-watching journey. </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt text-base link link-hover">Forgot password?</a>
              </label>
              <label className="label"> No account? 
                <Link to="/register" className="label-text-alt text-base link link-hover">Register Here</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Login