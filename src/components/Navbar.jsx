import React,{useState} from "react";
import { Link} from "wouter";
import GipLogo from "../static/giphy-logo.png";
import ReactLogo from "../static/logo192.png";

import "./style/navbar.css";
const Navbar = () => {
    const [keyword,setKeyword] = useState('')
    
    const search_txt = e =>{
        e.preventDefault()
        if(keyword){
          window.location.replace(`http://localhost:3000/gif/${keyword}`)
        }else{
          return false
        }
    }

    const handleChange = e =>{
        setKeyword(e.target.value)
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
        <Link to="/fav">Favorite</Link>
      </div>
      <form onSubmit={search_txt} className="navbar_search">
          <input onChange={handleChange} type="text" placeholder="Type something"/>
          <i  onClick={search_txt} className="fas fa-search"></i>
      </form>
    </div>
  );
};

export default Navbar;
