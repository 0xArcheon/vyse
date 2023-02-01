import React from 'react'
import "./CardManage.css"
import { db } from '../../firebase-config';
import { doc, deleteDoc } from "firebase/firestore";
import { Button } from '@mui/material';

function CardManage({ data }) {

    const deleteListing = async (id) => {
        const listing = doc(db, "Listings", id);
        deleteDoc(listing);
    }

    return (

        <div className="cont">
            <div className='reqCard'>
                <div className="left">
                    <img className='reqImg' src={data.img1} alt="bike" />
                </div>
                <div className="mid">
                    <div className='reqDetails'>
                        <div>Product: {data.title}</div>
                        <div>Price: ₹ {data.price}</div>
                        <div>Description: {data.description}</div>
                    </div>
                </div>

                <Button className='btnDeny' type="button" color='error' variant="contained" onClick={() => {
                    deleteListing(data.id);
                }}>Delete</Button>

            </div>
        </div>
    )
}

export default CardManage