import React from "react";

const Login = () => {


    return (
        <form class="container">
            <h2>Login Here</h2>
            <div class="mb-3 col-lg-6">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
               
            </div>
            <div class="mb-3 col-lg-6">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
           
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default Login