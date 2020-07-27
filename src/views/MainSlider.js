import React from 'react';

import Slider from '../components/slider/Slider';

import slider01 from '../img/slider/slider01.jpg';
import slider02 from '../img/slider/slider02.jpg';
import slider03 from '../img/slider/slider03.jpg';
import slider04 from '../img/slider/slider04.jpg';
import slider05 from '../img/slider/slider05.jpg';
import slider06 from '../img/slider/slider06.jpg';

import './styles/MainSlider.scss';

const MainSlider = () => {
  const images = [
    { image: slider01, vertical: false },
    { image: slider02, vertical: false },
    { image: slider03, vertical: false },
    { image: slider04, vertical: false },
    { image: slider05, vertical: false },
    { image: slider06, vertical: false },
  ];
  return (
    <div className="main-slider">
      <Slider images={images} />
    </div>
  );
};

export default MainSlider;
