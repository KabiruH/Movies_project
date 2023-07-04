import React from "react"
import { Link } from "react-router-dom"

function Homepage() {


    return (
        <div >
            <div className="hero min-h-screen pr-40 bg-[url(https://images.hdqwalls.com/download/avatar-the-way-of-water-movie-4k-mi-1920x1080.jpg)] ">
            
                <div className="hero-content text-center">
                    <div className="max-w-md bg-black rounded-lg opacity-80">
                        <h1 className="text-5xl font-bold py-2">Hello there</h1>
                        <p className="py-6 text-lg">Immerse yourself in the magic of storytelling as you explore diverse genres and captivating narratives. From heartwarming dramas to pulse-pounding action flicks, we have something to captivate every movie lover's imagination.</p>
                      <Link to="/register" className="btn btn-primary mb-5">Get Started</Link>
                    </div>
                </div>
            </div>

           
        </div>
    )
}


export default Homepage
