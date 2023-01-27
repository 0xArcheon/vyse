import React from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase-config";
import { getAuth } from "firebase/auth";
import './ProductForm.css';
import { v4 } from 'uuid';
import { storage } from '../../firebase-config';
import { ref, uploadBytes } from 'firebase/storage';


function ProductForm() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [description, setDescription] = useState('');
    const [pincode, setPincode] = useState('');
    const [locality, setLocality] = useState('')
    const [photos, setPhotos] = useState(null);

    const auth = getAuth();
    const user = auth.currentUser;
    const email = user.email;
    const handleSubmit = async (e) => {
        e.preventDefault();
        storeData();
        uploadFile();
    };
    const storeData = async () => {
        try {
            const docRef = await addDoc(collection(db, "Listings"), {
                sellerMail: email,
                title: title,
                category: category,
                price: price,
                description: description,
                pincode: pincode,
                locality: locality,

            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const uploadFile = () => {
        if (photos == null) return;
        const imageRef = ref(storage, `Listings/${photos.name + v4()}`);
        uploadBytes(imageRef, photos).then(() => {
            alert("Upload Successful!");
        });
    };

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    return (
        <div className="Outer">
            <form onSubmit={handleSubmit} className="myForm" action="">
                <h3>Enter Product Details</h3>
                <div className="field" >
                    <label htmlFor="name">Product Name/Title</label>
                    <div className="inputfield">
                        <input className='addField' type="text" name="title"
                            id="title" autoComplete='off'
                            value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>

                </div>
                <div className="field">
                    <label htmlFor="name">Category</label>
                    <Select labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Category"
                        onChange={handleChange}>
                        <MenuItem value={"Cars"}>Cars</MenuItem>
                        <MenuItem value={"Bikes"}>Bikes</MenuItem>
                        <MenuItem value={"Electronics"}>Electronics</MenuItem>
                    </Select>
                </div>
                <div className="field">
                    <label htmlFor="email">Asking Price (in Rupees)</label>
                    <div className="inputfield">
                        <input type="number" name="price" id="price" autoComplete='off'
                            value={price} onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="email">Description</label>
                    <div className="inputfield">
                        <input type="text" className='addField' name="desciption"
                            id="desciption" autoComplete='off'
                            value={description} onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="pincode">Area PIN code</label>
                    <div className="inputfield">
                        <input type="number" name="pincode" id="pincode" autoComplete='off'
                            value={pincode} onChange={(e) => setPincode(e.target.value)}

                        />
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="pass">Locality</label>
                    <div className="inputfield">
                        <input type="text" className='addField' name="address" id="address"
                            autoComplete='off'
                            value={locality} onChange={(e) => setLocality(e.target.value)}
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="pass">Upload Photos</label>
                    <div className="inputfield">
                        <input type="file" className='addField' name="photos"
                            accept="image/png, image/jpeg"
                            id="photos" autoComplete='off'
                            onChange={(e) => setPhotos(e.target.files[0])}
                        />
                    </div>

                </div>
                <div className="field">
                    <button type="submit" className="btn">Post Ad</button>
                </div>
            </form >
        </div >

    )
}

export default ProductForm