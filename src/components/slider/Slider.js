import React, { useState } from 'react';

import SliderImage from './SliderImage';
import SliderBar from './SliderBar';

import './slider.scss';

const Slider = ({ images }) => {
  const [active, setActive] = useState(0);
  const [sliderImages, setSliderImages] = useState({
    left: null,
    center: images[active],
    right: null,
  });
  const [position, setPosition] = useState(-100);
  const [transition, setTransition] = useState(1);
  const [block, setBlock] = useState(false);

  const onNavButtonClick = (nextActive) => {
    if (nextActive > active) {
      move(nextActive, 'right');
    }
    if (nextActive < active) {
      move(nextActive, 'left');
    }
  };

  const move = (nextActive, direction) => {
    let directionValue = 0;
    if (direction === 'right') {
      directionValue = -100;
    } else if (direction === 'left') {
      directionValue = 100;
    } else {
      return null;
    }
    if (block) {
      return null;
    }
    if (nextActive >= images.length) {
      nextActive = 0;
    }
    setBlock(true);
    setSliderImages({ ...sliderImages, [direction]: images[nextActive] });
    setPosition(position + directionValue);
    setActive(nextActive);
    setTimeout(() => {
      setTransition(0);
      setSliderImages({
        left: null,
        center: images[nextActive],
        right: null,
      });
      setPosition(-100);
      setBlock(false);
    }, 1100);
    setTransition(1);
  };

  return (
    <div className="slider">
      <div
        className="slide"
        style={{
          transform: `translateX(${position}%)`,
          transition: transition + 's',
        }}
      >
        <SliderImage src={sliderImages.left} />
      </div>
      <div
        className="slide"
        style={{
          transform: `translateX(${position}%)`,
          transition: transition + 's',
        }}
      >
        <SliderImage src={sliderImages.center} />
      </div>
      <div
        className="slide"
        style={{
          transform: `translateX(${position}%)`,
          transition: transition + 's',
        }}
      >
        <SliderImage src={sliderImages.right} />
      </div>
      <div
        className="button-left"
        onClick={() => move(active - 1, 'left')}
      ></div>
      <div
        className="button-right"
        onClick={() => move(active + 1, 'right')}
      ></div>
      <SliderBar
        images={images}
        active={active}
        onNavButtonClick={onNavButtonClick}
      />

      {/* Rudymentary pre load images */}
      {images.map((image, index) => {
        return (
          <div key={index} style={{ display: 'none' }}>
            <img src={image} alt="you shouldn't see this" />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
