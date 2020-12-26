import React from 'react'
import getDefaultGif from '../services/getGifs'
import Navbar from '../components/Navbar'
import './style/home.css'


const Home = () => {
    getDefaultGif()
    return (
        <div className="main">
            <nav>
                <Navbar />
            </nav>
            <div>
                
            </div>
        </div>
    )
}

export default Home
