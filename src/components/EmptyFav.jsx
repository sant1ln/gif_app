import React from 'react'
import { Link } from 'wouter'
import './style/empty.css'

export const EmptyFav = () => {
    return (
        <div  className="empty_container">
             <i className="far fa-frown"></i>
             <div className="empty_container-text">
                <p>Nothing here...</p>
                <Link to="/">Start to add now!</Link>
             </div>
       </div>
    )
}
