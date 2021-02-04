import { useContext, useState } from "react"
import AppContext from "../context/AppContext"

export const useGif = ({img,title,id}) => {
    const {dispatch} = useContext(AppContext)
    const [list, setList] = useState(false)

    const handleFavorites = () =>{
      setList(true)
      const data = {
        id,
        title,
        img,
        list:true
      }

        dispatch({
            type: 'ADD_FAVORITE',
            payload: data
        })

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
