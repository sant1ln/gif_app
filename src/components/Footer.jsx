import React from "react";
import { Link } from "wouter";
import "./style/footer.css";
export const Footer = () => {
  return (
    <footer>
      <div className="author">
        Made with 🤘🏼 by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/SantiagoLN99"
        >
          @Santiago Lopera
        </a>
      </div>

      <Link className="about" to="/about">About this app</Link>
    </footer>
  );
};
