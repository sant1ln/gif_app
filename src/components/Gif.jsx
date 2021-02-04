import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import "./style/gif.css";
import 'animate.css'

const Gif = ({isList,img,title,id}) => {
    
    const {dispatch} = useContext(AppContext)
    const [list, setList] = useState(false)

    const handleFavorites = () =>{
      const data = {
        id,
        title,
        img,
        isList : true
      }

        dispatch({
            type: 'ADD_FAVORITE',
            payload: data
        })

      setList(true)
    }

    const removeFavorites = (id) =>{
      dispatch({
        type: 'REMOVE_FAVORITE',
        payload: id
      })
      setList(false)
    }
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
