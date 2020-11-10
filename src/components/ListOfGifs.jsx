import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import getGifs from '../services/getGifs'
import './style/ListOfGifs.css'

const ListOfGifs = ({ params }) => {

  const {keyword} = params

  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    getGifs({ keyword})
        .then((gifs) => setGifs(gifs));
  },[keyword]);
  
  return <>
   { 
      gifs.map((singleGif) => (
      <Gif title={singleGif.title} url={singleGif.url} id={singleGif.id} key={singleGif.id} />
      ))
    }
  </>
  
  
  
};

export default ListOfGifs;
