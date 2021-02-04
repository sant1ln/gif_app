import React from "react";
import Giff from "./Gif";
import {Footer} from '../components/Footer'
import "./style/ListOfGifs.css";
import { useData } from "../hooks/useData";

const ListOfGifs = ({ params }) => {
  const { keyword } = params;
   const gifs = useData(keyword)
  return (
    <div className="app_container_sec">
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
