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
                    <h2>{item.title}</h2>
                    <div className="price">
                        <h2>₹ {item.price}</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default card