import React, { useContext } from "react";
import { Link } from "wouter";
import AppContext from "../context/AppContext";
import './style/sidebar.css'
export const Sidebar = () => {
  const {dispatch} = useContext(AppContext)
  
  const closeSideBar = () =>{
    dispatch({
     type: 'TOGGLE_SIDEBAR'
    })
  }

  return (
  
    <div className="sidebar_container">
      <div className="sidabar_controls">
       <h2>Menu!</h2> 
        <i onClick={closeSideBar} className='far fa-times-circle'></i>
      </div>
      <Link onClick={closeSideBar} to="/gif/sports">Sports</Link>
      <Link onClick={closeSideBar} to="/gif/games">Games</Link>
      <Link onClick={closeSideBar} to="/gif/cats">Cats</Link>
      <Link onClick={closeSideBar} to="/gif/music">Music</Link>
      <Link onClick={closeSideBar} to="/fav">Favorite</Link>
      <Link onClick={closeSideBar} to="/about">About</Link>
    </div>
    
  );
};
