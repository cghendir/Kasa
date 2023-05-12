import React, { useState } from 'react';
import { SliderData } from './SliderData';
import ArrowLeft from '../images/ArrowLeft.png';
import ArrowRight from '../images/ArrowRight.png';

function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  console.log(length);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <img src={ArrowLeft} alt="" className="left-arrow" onClick={prevSlide} />
      <img
        src={ArrowRight}
        alt=""
        className="right-arrow"
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide slide-active' : 'slide'}
            key={index}
          >
            <img src={slide.image} alt="" className="slider_img" />
          </div>
        );
      })}
    </div>
  );
}

export default ImageSlider;
