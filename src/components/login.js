import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault()

    fetch("http://127.0.0.1:9292/auth/login", {
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
    <form class="container" onSubmit={e => handleSubmit(e)}>
      <h2>Login Here</h2>
      <div class="mb-3 col-lg-6">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

      </div>
      <div class="mb-3 col-lg-6">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" required />
      </div>

      <input type="submit" class="btn btn-success" />

    </form>
  )
}

export default Login