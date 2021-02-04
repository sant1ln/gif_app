import React, { useState, useEffect } from "react";
import Giff from "./Gif";
import getGifs from "../services/getGifs";
import Navbar from "../components/Navbar";
import {Footer} from '../components/Footer'
import "./style/ListOfGifs.css";

const ListOfGifs = ({ params }) => {
  const { keyword } = params;

  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]);

  return (
    <div className="app_container_sec">
      <Navbar />
      <h2 className="title">{keyword}</h2>
      <div className="container_gif">
        {gifs.map((singleGif) => (
          <Giff
            isList={singleGif.isList}
            id={singleGif.id}
            img={singleGif.url}
            title={singleGif.title}
            key={singleGif.id}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default ListOfGifs;
