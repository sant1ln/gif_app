import React from 'react'
import './style/gif.css'

const Gif = ({title,url,id}) => {
    return (
        <a href={`#${id}`} className="Gif">
            <img 
              src={url} 
              alt={title}
              key={id}
              />
        </a>
    )
}

export default Gif
