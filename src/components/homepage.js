import React from "react"
import { Link } from "react-router-dom"

function Homepage() {


    return (
        <div >
            <div className="hero min-h-screen bg-neutral-900 ">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">Immerse yourself in the magic of storytelling as you explore diverse genres and captivating narratives. From heartwarming dramas to pulse-pounding action flicks, we have something to captivate every movie lover's imagination.</p>
                      <Link to="/register" className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>

           
        </div>
    )
}


export default Homepage
