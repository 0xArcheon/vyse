import React from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import './ProductForm.css'

function ProductForm() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [description, setDescription] = useState('');
    const [pincode, setPincode] = useState('');
    const [locality, setLocality] = useState('')
    const [photos, setPhotos] = useState('');

    const handleSubmit = async (e) => { };

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
                        <input className='addField' type="text" name="title" id="title" autoComplete='off'
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
                        <input type="text" className='addField' name="desciption" id="desciption" autoComplete='off'
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
                        <input type="text" className='addField' name="address" id="address" autoComplete='off'
                            value={locality} onChange={(e) => setLocality(e.target.value)}
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="pass">Upload Photos</label>
                    <div className="inputfield">
                        <input type="file" className='addField' name="photos" multiple accept="image/png, image/jpeg" id="photos" autoComplete='off'
                            value={photos} onChange={(e) => setPhotos(e.target.value)}
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