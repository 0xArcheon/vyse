import React from 'react'
import { Link } from 'react-router-dom'
import "./card.css"
function card({ item }) {
    return (
        <Link to={'/product/${item.id}'}>
            <div className='card'>
                <div className="image">
                    <img src={item.img} alt="" className="mainImg"></img>
                    <img src={item.img2} alt="" className="secondImg"></img>
                </div>
                <div className="box">
                    <span>{item.title}</span>
                    <div className="price">
                        <span>₹ {item.price}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default card