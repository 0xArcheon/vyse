import React from 'react';
import "./MyListings.css";
import { useEffect } from "react";
import Card from '../components/Card/card';
import { db } from '../firebase-config';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { useState } from 'react';
import { getAuth } from "firebase/auth";

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
        <div className="card-container">
            {myListings.map((data) => {
                return (<Card data={data} key={data.id}></Card>);

            })}
        </div>
    )
}

export default MyListings