import React from 'react';
import "./MyListings.css";
import { useEffect } from "react";
import { db } from '../firebase-config';
import { collection, getDocs, where, query, deleteDoc, doc } from 'firebase/firestore';
import { useState } from 'react';
import { getAuth } from "firebase/auth";
import { Button } from '@mui/material';
import CardManage from '../components/Card/CardManage';

function MyListings() {

    const auth = getAuth();
    const user = auth.currentUser;
    const [myListings, setMyListings] = useState([]);
    const listingRef = collection(db, "Listings");
    const q = query(listingRef, where("sellerMail", "==", user.email));

    useEffect(() => {
        const getMyListings = async () => {
            const data = await getDocs(q);
            setMyListings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getMyListings();
    })

    return (
        <div>
            <div className="title">My Listings</div>
            <div className="card-container">
                {myListings.map((data) => {
                    return (<CardManage data={data} key={data.id}></CardManage>);
                })}
            </div>
        </div>
    )
}

export default MyListings