import React, { useState } from 'react'
import productCSS from './productCSS.module.css';
import { useLocation } from "react-router-dom";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PinDropIcon from '@mui/icons-material/PinDrop';
import SimpleImageSlider from "react-simple-image-slider";


function Product(props) {
    const location = useLocation();
    const productID = location.state?.product;
    const title = location.state?.title;
    const price = location.state?.price;
    const description = location.state?.description;
    const sellerMail = location.state?.sellerMail;
    const pincode = location.state?.pincode;
    const locality = location.state?.locality;
    const img1 = location.state?.img1;
    const img2 = location.state?.img2;
    const img3 = location.state?.img3;

    const sendMail = `mailto:${sellerMail}?subject=${title}`;
    console.log(sendMail);
    const images = [
        { url: img1 },
        { url: img2 },
        { url: img3 }];
    return (
        <div>
            <div className={productCSS.productcont}>
                <div className={productCSS.left}>
                    <SimpleImageSlider
                        width={650}
                        height={500}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                    />
                </div>
                <div className={productCSS.right}>
                    <h1>{title}</h1>
                    <div className={productCSS.price}>
                        <CurrencyRupeeIcon></CurrencyRupeeIcon>
                        {price}
                    </div>
                    <div className={productCSS.seller}>
                        <PinDropIcon /><span>{pincode},</span><span>                 </span><span>{locality}</span>
                    </div>
                    <div className={productCSS.desc}>
                        <h3>Description</h3>
                        {description}

                    </div>
                    <div className={productCSS.contact}>
                        <button type="button"><a href={sendMail}>
                            Contact Seller</a></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product