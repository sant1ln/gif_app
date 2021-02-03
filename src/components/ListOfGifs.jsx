import React, { useState, useEffect } from "react";
import Giff from "./Gif";
import getGifs from "../services/getGifs";
import Navbar from "../components/Navbar";
import "./style/ListOfGifs.css";

const ListOfGifs = ({ params }) => {
  const { keyword } = params;

  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]);

  return (
    <>
      <Navbar />
      <div className="container_gif">
        {gifs.map((singleGif) => (
          <Giff
            isList={false}
            id={singleGif.id}
            img={singleGif.url}
            title={singleGif.title}
            key={singleGif.id}
          />
        ))}
      </div>
    </>
  );
};

export default ListOfGifs;
