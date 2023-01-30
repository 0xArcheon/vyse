import React from 'react'
import { Link } from 'react-router-dom'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./card.css"
import { useState } from 'react';
function Card({ data }) {
    const [product, setProduct] = useState(false);
    return (

        <Link to={'/product/${data.title}'} state={{
            product: data.id,
            title: data.title,
            description: data.description,
            price: data.price,
            sellermail: data.sellermail,
            pincode: data.pincode,
            locality: data.locality,
            img1: data.img1,
            img2: data.img2,
            img3: data.img3,
        }}>
            <div className='card'>
                <div className="image">
                    <img src={data.img1} alt="" className="mainImg"></img>
                    <img src={data.img2} alt="" className="secondImg"></img>
                    <img src={data.img3} alt="" className="thirdImg"></img>
                </div>
                <div className="box">
                    <span>{data.title}</span>
                    <div className="price">
                        <span>₹ {data.price}</span>
                    </div>
                    <div className="location">
                        <div className="left-loc"><LocationOnIcon /> </div>
                        <div className="right-loc">
                            <div>{data.locality}</div>
                            <div>{data.pincode}</div>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card