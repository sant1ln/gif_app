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
      <gif className="container_gif">
        {gifs.map((singleGif) => (
          <Giff
            title={singleGif.title}
            url={singleGif.url}
            id={singleGif.id}
            key={singleGif.id}
          />
        ))}
      </gif>
    </>
  );
};

export default ListOfGifs;
