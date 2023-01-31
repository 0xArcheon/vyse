import React, { useState, useEffect } from 'react';
import "./Products.css";
import Card from '../components/Card/card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { db } from '../firebase-config';
import { collection, getDocs, where, query } from 'firebase/firestore';

function Products() {

    const [pincode, setPincode] = useState([]);
    const [listing, setListing] = useState([]);
    const listingRef = collection(db, "Listings");
    const q = query(listingRef, where("isApproved", "==", true));
    const pinQuery = query(listingRef, where("pincode", "==", pincode));

    useEffect(() => {
        const getListing = async () => {
            const data = await getDocs(q);
            setListing(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getListing();
    }, []);
    return (
        <div className="products">
            <div className="search">
            </div>

            <div className="title">Browse Listings</div>
            <div className="hint">Enter your pincode below to browse Listings near you</div>
            <div className="zip-container">
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate autoComplete="off">
                    <TextField id="filled-basic"
                        label="ZIP Code" color="success" onChange={(e) => { setPincode(e.target.value) }} />                </Box>
            </div>
            <div className="card-container">
                {listing.map((data) => {
                    return (<Card data={data} key={data.id}></Card>);

                })}
            </div>
        </div>
    )
}

export default Products