import React, { useContext } from 'react'
import { EmptyFav } from '../components/EmptyFav'
import { Footer } from '../components/Footer'
import Gif from '../components/Gif'
import Navbar from '../components/Navbar'
import AppContext from '../context/AppContext'

export const Favorites = () => {
    const {state} = useContext(AppContext)
    const {favorites} = state;
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <h2 className="title">Favorites</h2>
            <div className="container_gif">
                {
                    (favorites.length < 1)
                    ?<EmptyFav />
                    :favorites.map(fav=>(
                        <Gif
                            key={fav.id}
                            isList={fav.isList}
                            id={fav.id}
                            img={fav.img}
                            title={fav.title}
                        />
                    ))
                }
            </div>
            <Footer/>
        </div>
    )
}
