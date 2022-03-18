import React from 'react'
import {Link} from "react-router-dom"
import "./Service.css"

const Service = ({img, title, desc}) => {
  return (
    <div className="service">
        <img 
            className="serv__img"
            src={img}
            alt={title}
        />
        <h1 className="serv__title">
            {title}
        </h1>
        <p className="serv__desc">
            {desc}
        </p>

        <div className="btn">
            <Link to="/" >
                <button className="serv__btn">
                    Read More
                </button>
            </Link>
        </div>
        
        
    </div>
  )
}

export default Service