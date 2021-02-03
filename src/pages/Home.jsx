import React, { useEffect, useState } from 'react'
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
            <div className="container_gif">
                {
                    trendingGifs.map((item)=>(
                        <Gif
                            key={item.id}
                            isList={false}
                            id={item.id}
                            img={item.url}
                            title={item.title}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home
