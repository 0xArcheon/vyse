import React, { useState } from 'react';
import { SliderData } from './SliderData';
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'
import ImageSlides from './ImageSlider.module.css';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length;
  
  const nextSlide = () =>{
      setCurrent(current===length-1 ? 0 : current+1);
      console.log(current);
  };
  
  const prevSlide = () =>{
      setCurrent(current===0 ? length-1 : current-1);
  };

  if(!Array.isArray(slides) || slides.length<=0){
      return null;
  }

  return (
    <section className={ImageSlides.slider}>
        <FaAngleLeft className={ImageSlides.leftarrow} onClick={prevSlide}/>
        <FaAngleRight className={ImageSlides.rightarrow} onClick={nextSlide}/>
        {
            SliderData.map((slide, index)=>{
                return (
                    <div
                     className={index === current ? 'slide active' : 'slide'}
                     key={index}
                    >
                        {index === current && (
                            <img src={slide.image} alt="slide image" className={ImageSlides.image}/>
                        )}
                    </div>
                );
            })
        }
    </section>
  )
}

export default ImageSlider