import React from "react";
import { Link } from "wouter";
import GipLogo from "../static/giphy-logo.png";
import ReactLogo from "../static/logo192.png";
import Search from '../static/search.svg'

import "./style/navbar.css";
const Navbar = () => {

    const search_txt = () =>{
        let value = document.querySelector('input').value
        console.log(value)
        window.location.replace(`http://localhost:3000/gif/${value}`)
    }


  return (
    <div className="navbar">
      <Link to="/" className="navbar_logo">
        <img src={GipLogo} alt="" />
        <img className="react_l" src={ReactLogo} alt="" />
      </Link>
      <div className="navbar_directs">
        <Link to="/gif/sports">Sports</Link>
        <Link to="/gif/games">Games</Link>
        <Link to="/gif/cats">Cats</Link>
        <Link to="/gif/music">Music</Link>
      </div>
      <div className="navbar_search">
        <input  type="text" placeholder="Type something" />
        <img onClick={search_txt} src={Search} alt=""/>
      </div>
    </div>
  );
};

export default Navbar;
