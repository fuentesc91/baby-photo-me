import React, { useState } from 'react';

import SliderImage from './SliderImage';
import SliderBar from './SliderBar';

import './slider.scss';

import ArrowLeft from '../../img/icons/arrow-left.png';
import ArrowRight from '../../img/icons/arrow-right.png';

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
      moveRight(nextActive);
    }
    if (nextActive < active) {
      moveLeft(nextActive);
    }
  };

  const moveRight = (nextActive) => {
    if (block) {
      return null;
    }
    if (nextActive >= images.length) {
      nextActive = 0;
    }
    setBlock(true);
    setSliderImages({ ...sliderImages, right: images[nextActive] });
    setPosition(position - 100);
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

  const moveLeft = (nextActive) => {
    if (block) {
      return null;
    }
    if (nextActive < 0) {
      nextActive = images.length - 1;
    }
    setBlock(true);
    setSliderImages({ ...sliderImages, left: images[nextActive] });
    setPosition(position + 100);
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
      <div className="button-left" onClick={() => moveLeft(active - 1)}>
        <img src={ArrowLeft} alt="arrow-left" />
      </div>
      <div className="button-right" onClick={() => moveRight(active + 1)}>
        <img src={ArrowRight} alt="arrow-right" />
      </div>
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
