import React from "react";
import { Link} from "wouter";
import { useSearch } from "../hooks/useSearch";
import GipLogo from "../static/giphy-logo.png";
import ReactLogo from "../static/logo192.png";

import "./style/navbar.css";
const Navbar = () => {
    
  const {keyword, search_txt, handleChange,openSidebar} = useSearch()

  return (
    <div className="navbar">
      <i onClick={openSidebar} className="fas fa-bars open"></i>
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
          <input onChange={handleChange}  value={keyword} type="text" placeholder="Search something"/>
          <i  onClick={search_txt} className="fas fa-search search"></i>
      </form>
    </div>
  );
};

export default Navbar;
