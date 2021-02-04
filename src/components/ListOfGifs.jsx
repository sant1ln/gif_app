import React, { useContext } from "react";
import Giff from "./Gif";
import {Footer} from '../components/Footer'
import "./style/ListOfGifs.css";
import { useData } from "../hooks/useData";
import { NotFound } from "./NotFound";

const ListOfGifs = ({ params }) => {
  const { keyword } = params;
   const gifs = useData(keyword)
  return (
    <div className="app_container_sec">

      <div className="container_gif">
        {(gifs < 1)   
        ?<NotFound/>
        :gifs.map((singleGif) => (
          <Giff
            list={singleGif.list}
            id={singleGif.id}
            img={singleGif.url}
            title={singleGif.title}
            key={singleGif.id}
          />
        ))
       
        }
      </div>
      <Footer/>
    </div>
  );
};

export default ListOfGifs;
