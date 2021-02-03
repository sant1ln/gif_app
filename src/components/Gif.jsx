import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "./style/gif.css";

const Gif = ({isList,img,title,id}) => {
    /* const {id,url,title} = data */
    const {dispatch} = useContext(AppContext)
   /*  const {favorites} = state */ 
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
      /* let item = document.querySelector(`#${id}`)
      item.classList.remove('far', 'fa-star')
      item.classList.add('far', 'fa-times-circle') */
    }

    const removeFavorites = (id) =>{
      console.log(id)
    }
  return (
    <div className="Gif">
      <img src={img} alt={title} key={id} />
      <div className="add_to_favorites_container">
        {
          (isList)
            ?<i onClick={()=> removeFavorites(id)} className='far fa-times-circle'></i>
            :<i onClick={handleFavorites} id={id} className='far fa-star'></i>
        }
       
      </div>
    </div>
  );
};

export default Gif;
