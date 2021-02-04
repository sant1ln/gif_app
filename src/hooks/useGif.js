import { useContext, useState } from "react"
import AppContext from "../context/AppContext"

export const useGif = ({isList,img,title,id}) => {
    const {dispatch} = useContext(AppContext)
    const [list, setList] = useState(false)

    const handleFavorites = () =>{
      const data = {
        id,
        title,
        img,
        isList
      }

        dispatch({
            type: 'ADD_FAVORITE',
            payload: data
        })

      setList(true)
    }

    const removeFavorites = (id) =>{
      dispatch({
        type: 'REMOVE_FAVORITE',
        payload: id
      })
      setList(false)
    }

    return {list,handleFavorites,removeFavorites}
}
