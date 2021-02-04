import { useEffect, useState } from "react";
import { getTrendingGifs } from "../services/getTrendingGifs";


export const useGetTrending = () => {
    const [trendingGifs, setTrendingGifs] = useState([]);
    useEffect(() => {
        getTrendingGifs().then((gifs) => setTrendingGifs(gifs));
    }, []);

    return trendingGifs
}
