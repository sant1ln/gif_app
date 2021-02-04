import React from "react";
import { Footer } from "../components/Footer";
import Gif from "../components/Gif";
import { useGetTrending } from "../hooks/useGetTrending";
import "./style/home.css";

const Home = () => {

  const trendingGifs = useGetTrending()  

  return (
    <div className="main">
     
      <div>
        <h2>Trending!</h2>
        <div className="container_gif">
          {trendingGifs.map((item) => (
            <Gif
              key={item.id}
              list={item.list}
              id={item.id}
              img={item.url}
              title={item.title}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
