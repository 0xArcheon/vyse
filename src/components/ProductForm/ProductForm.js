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
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const notify = () => toast("Upload Successful");
const notifyAd = () => toast.success("Ad posted successfully");

function ProductForm() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [description, setDescription] = useState('');
    const [pincode, setPincode] = useState('');
    const [locality, setLocality] = useState('')
    const [photo, setPhoto] = useState(null);
    const [photo2, setPhoto2] = useState(null);
    const [photo3, setPhoto3] = useState(null);
    const [photo1URL, setPhotoURL] = useState(null);
    const [photo2URL, setPhotoURL2] = useState(null);
    const [photo3URL, setPhotoURL3] = useState(null);

    const auth = getAuth();
    const user = auth.currentUser;
    const email = user.email;
    const handleSubmit = async (e) => {
        e.preventDefault();
        storeData();
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
                img1: photo1URL,
                img2: photo2URL,
                img3: photo3URL,
                isApproved: false
            });
            console.log("Document written with ID: ", docRef.id);
            notifyAd();
        } catch (e) {
            console.error("Error adding document: ", e);
            const errorMsg = () => toast(e.message);
            errorMsg();
        }
    }

    const uploadFile = () => {
        if (photo == null || photo2 == null || photo3 == null) return;
        const photo1Name = `Listings/${photo.name + v4()}`
        const imageRef = ref(storage, photo1Name);
        uploadBytes(imageRef, photo).then(() => {
            getDownloadURL(ref(storage, photo1Name)).then((url) => {
                setPhotoURL(url);
            });
            notify();
        });

        const photo2Name = `Listings/${photo2.name + v4()}`
        const imageRef2 = ref(storage, photo2Name);
        uploadBytes(imageRef2, photo2).then(() => {
            getDownloadURL(ref(storage, photo2Name)).then((url) => {
                setPhotoURL2(url);
            });
            notify();
        });

        const photo3Name = `Listings/${photo3.name + v4()}`
        const imageRef3 = ref(storage, photo3Name);
        uploadBytes(imageRef3, photo3).then(() => {
            getDownloadURL(ref(storage, photo3Name)).then((url) => {
                setPhotoURL3(url);
            });
            notify();
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
                        <input className='addField' type="text" name="title" required
                            id="title" autoComplete='off'
                            value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>

                </div>
                <div className="field">
                    <label htmlFor="name">Category</label>
                    <Select labelId="demo-simple-select-label" required
                        id="demo-simple-select"
                        value={category}
                        label="Category"
                        onChange={handleChange}>
                        <MenuItem value={"Cars"}>Cars</MenuItem>
                        <MenuItem value={"Bikes"}>Bikes</MenuItem>
                        <MenuItem value={"Furniture"}>Furniture</MenuItem>
                        <MenuItem value={"Phones"}>Phones</MenuItem>
                        <MenuItem value={"Electronics"}>Electronics</MenuItem>
                        <MenuItem value={"Accessories"}>Accessories</MenuItem>
                        <MenuItem value={"Property"}>Property</MenuItem>

                    </Select>
                </div>
                <div className="field">
                    <label htmlFor="email">Asking Price (in Rupees)</label>
                    <div className="inputfield">
                        <input type="number" name="price" id="price" autoComplete='off' required
                            value={price} onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="email">Description</label>
                    <div className="inputfield">
                        <input type="text" className='addField' name="desciption" required
                            id="desciption" autoComplete='off'
                            value={description} onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="pincode">Area PIN code</label>
                    <div className="inputfield">
                        <input type="number" name="pincode" id="pincode" autoComplete='off' required
                            value={pincode} onChange={(e) => setPincode(e.target.value)}

                        />
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="pass">Locality</label>
                    <div className="inputfield">
                        <input type="text" className='addField' name="address" id="address" required
                            autoComplete='off'
                            value={locality} onChange={(e) => setLocality(e.target.value)}
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="field picker">
                    <label htmlFor="pass">Upload Photos</label>
                    <div className="inputfield">
                        <input type="file" className='addField' name="photos" required
                            accept="image/png, image/jpeg"
                            id="photos" autoComplete='off'
                            onChange={(e) => setPhoto(e.target.files[0])}
                        />
                    </div>

                    <div className="inputfield">
                        <input type="file" className='addField' name="photos" required
                            accept="image/png, image/jpeg"
                            id="photos" autoComplete='off'
                            onChange={(e) => setPhoto2(e.target.files[0])}
                        />
                    </div>
                    <div className="inputfield">
                        <input type="file" className='addField' name="photos" required
                            accept="image/png, image/jpeg"
                            id="photos" autoComplete='off'
                            onChange={(e) => setPhoto3(e.target.files[0])}
                        />
                    </div>
                    <div className="field">
                        <button type='button' className="upBtn" onClick={uploadFile}>Upload</button>
                    </div>
                </div>
                <div className="field">
                    <button type="submit" className="btn">Post Ad</button>
                </div>
            </form >
            <ToastContainer autoClose={1200} />
        </div >

    )
}

export default ProductForm