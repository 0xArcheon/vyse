import React from 'react'
import { Link } from 'react-router-dom'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./card.css"
function card({ data }) {
    return (
        <Link to={'/product/${data.id}'}>
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

export default card