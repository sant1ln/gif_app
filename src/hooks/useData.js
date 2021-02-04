import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

export const useData = (keyword) => {
   
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
      getGifs({ keyword }).then((gifs) => setGifs(gifs));
    }, [keyword]);

    return gifs
}
