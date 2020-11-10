import React from 'react'
import './style/gif.css'

const Gif = ({title,url,id}) => {
    return (
        <a href={`#${id}`} className="Gif">
            <h4>{title}</h4>
            <img 
              src={url} 
              alt={title}
              key={id}
              />
        </a>
    )
}

export default Gif
