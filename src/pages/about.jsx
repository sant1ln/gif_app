import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import MiniGiphy from "../static/logomin.png";
import "./style/about.css";
export const about = () => {
  return (
    <div>
      <Navbar />
      <div className="about_container">
        <div className="main_text">
          <h3>This is a app where i get data from</h3>

          <a
            href="https://developers.giphy.com/docs/sdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Giphy API.
          </a>
        </div>
        <h3>Technologies used:</h3>
        <div className="technologies">
          <a href="https://es.reactjs.org/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-react react"></i>
          </a>
          <a href="https://github.com/sant1ln" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github github"></i>
          </a>
          <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-node-js node"></i>
          </a>
          <a href="https://giphy.com/" target="_blank" rel="noopener noreferrer">
            <img src={MiniGiphy} width="35" alt="" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};
