import React from 'react'
import productCSS from './productCSS.module.css';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import { SliderData } from '../components/ImageSlider/SliderData';

function Product() {

    return (
        <div>
            <div className={productCSS.productcont}>
                <div className={productCSS.left}>
                    <div className={productCSS.img}>
                        <ImageSlider slides={SliderData} />
                    </div>
                </div>
                <div className={productCSS.right}>
                    <h1>Nike Air Jordan 1</h1>
                    <div className={productCSS.price}>
                        Rs. 19999
                    </div>
                    <div className={productCSS.seller}>
                        Seller: John Mctavish
                    </div>
                    <div className={productCSS.desc}>
                        <h3>Description</h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error eligendi quia perspiciatis sapiente possimus accusamus
                        ipsa assumenda vel tenetur omnis ab totam quos quod quis,
                        blanditiis quasi hic nihil. Alias. Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Ducimus, pariatur quod quia qui consequuntur quidem ea alias

                    </div>
                    <div className={productCSS.contact}>
                        <button type="button">Contact Seller</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product