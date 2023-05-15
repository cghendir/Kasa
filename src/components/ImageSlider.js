import React, { useState } from 'react';
import ArrowLeft from '../images/ArrowLeft.png';
import ArrowRight from '../images/ArrowRight.png';

function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

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
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide slide-active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide} alt="" className="slider_img" />
            )}
            {index === current && length > 1 && (
              <span className="slider_number">
                {current + 1}/{length}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ImageSlider;
