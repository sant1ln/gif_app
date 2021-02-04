import React from 'react'
import { Link } from 'wouter'
import './style/empty.css'
export const NotFound = () => {
    return (
        <div  className="empty_container">
        <i className="far fa-frown"></i>
        <div className="empty_container-text">
           <p>We can't find what you're looking for!</p>
           <Link to="/">Go home</Link>
        </div>
  </div>
    )
}
