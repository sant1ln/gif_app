import React, { useEffect, useState } from 'react'
import { Footer } from '../components/Footer'
import Gif from '../components/Gif'
import Navbar from '../components/Navbar'
import {getTrendingGifs} from '../services/getTrendingGifs'
import './style/home.css'


const Home = () => {
    const [trendingGifs, setTrendingGifs] = useState([])
    useEffect(() =>  {
        getTrendingGifs().then((gifs)=>setTrendingGifs(gifs))
        
    }, [])

    return (
        <div className="main">
            <nav>
                <Navbar />
            </nav>
            <h2>Trending!</h2>
            <div className="container_gif">
                {
                    trendingGifs.map((item)=>(
                        <Gif
                            key={item.id}
                            isList={item.isList}
                            id={item.id}
                            img={item.url}
                            title={item.title}
                        />
                    ))
                }
            </div>
            <Footer/>
        </div>
    )
}

export default Home
