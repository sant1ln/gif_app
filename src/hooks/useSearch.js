import { useContext, useState } from "react"
import AppContext from "../context/AppContext"

export const useSearch = () => {
    const [keyword, setKeyword] = useState('')
    const { dispatch } = useContext(AppContext)
    const search_txt = e => {
        e.preventDefault()
        if (keyword) {
            window.location.replace(`/gif/${keyword}`)
        } else {
            return false
        }
    }
    const handleChange = e => {
        setKeyword(e.target.value)
    }

    const openSidebar = () => {
        dispatch({
            type: 'TOGGLE_SIDEBAR'
        })
    }

    return { keyword, search_txt, handleChange, openSidebar }
}