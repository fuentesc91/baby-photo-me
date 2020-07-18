import React from 'react';

import Slider from './slider/Slider';

import slider01 from '../img/slider/slider01.jpg';
import slider02 from '../img/slider/slider02.jpg';
import slider03 from '../img/slider/slider03.jpg';
import slider04 from '../img/slider/slider04.jpg';
import slider05 from '../img/slider/slider05.jpg';
import slider06 from '../img/slider/slider05.jpg';

import './MainSlider.scss';

const MainSlider = () => {
  const images = [slider01, slider02, slider03, slider04, slider05, slider06];
  return (
    <div className="main-slider">
      <Slider images={images} />
    </div>
  );
};

export default MainSlider;
