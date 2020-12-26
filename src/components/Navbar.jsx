import React,{useState} from "react";
import { Link,useLocation } from "wouter";
import GipLogo from "../static/giphy-logo.png";
import ReactLogo from "../static/logo192.png";
import Search from '../static/search.svg'

import "./style/navbar.css";
const Navbar = () => {
    
    const [keyword,setKeyword] = useState('')
    let [,newPath] = useLocation()

    const search_txt = e =>{
        e.preventDefault()
         /* path = path.replace('http://localhost:3000/gif/','x')
        console.log('n',path) */
        if(keyword){
          newPath(`gif/${keyword}`)
        }else{
          return false
        }
        //window.location.replace(`http://localhost:3000/gif/${value}`)
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
      </div>
      <form onSubmit={search_txt} className="navbar_search">
         <input onChange={handleChange} type="text" placeholder="Type something"/>
          <img onClick={search_txt} src={Search} alt=""/>
      </form>
    </div>
  );
};

export default Navbar;
