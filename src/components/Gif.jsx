import React from "react";
import "./style/gif.css";
import 'animate.css'
import { useGif } from "../hooks/useGif";

const Gif = ({isList,img,title,id}) => {
    
  const {list,handleFavorites,removeFavorites} = useGif({isList,img,title,id})  

  return (
    <div className="Gif">
      <img src={img} alt={title} key={id} />
      <div className="add_to_favorites_container">
        {
          (list || isList)
            ?<i onClick={()=> removeFavorites(id)} className='far fa-times-circle animate__animated animate__bounceIn'></i>
            :<i onClick={handleFavorites} id={id} className='far fa-star'></i>
        }
       
      </div>
    </div>
  );
};

export default Gif;
