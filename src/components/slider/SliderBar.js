import React from 'react';

const SliderBar = ({ images, active, onNavButtonClick }) => {
  return (
    <div className="slider-bar">
      {images.map((_, index) => {
        return (
          <div
            key={index}
            className={`slider-button ${active === index ? 'active' : null}`}
            onClick={() => onNavButtonClick(index)}
          ></div>
        );
      })}
    </div>
  );
};

export default SliderBar;
