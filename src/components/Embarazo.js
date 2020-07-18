import React from 'react';

import SectionTitle from './section-title/SectionTitle';
import Slider from './slider/Slider';

import EmbarazoTitle from '../img/lettering/embarazo.png';

import embarazo01 from '../img/embarazo/embarazo01.jpg';
import embarazo02 from '../img/embarazo/embarazo02.jpg';
import embarazo03 from '../img/embarazo/embarazo03.jpg';
import embarazo04 from '../img/embarazo/embarazo04.jpg';
import embarazo05 from '../img/embarazo/embarazo05.jpg';
import embarazo06 from '../img/embarazo/embarazo06.jpg';

const Embarazo = () => {
  const images = [
    embarazo01,
    embarazo02,
    embarazo03,
    embarazo04,
    embarazo05,
    embarazo06,
  ];

  return (
    <div id="embarazo">
      <SectionTitle
        title={EmbarazoTitle}
        textTitle="Embarazo"
        description="A partir de las 28 semanas de embarazo"
      />
      <Slider images={images} />
    </div>
  );
};

export default Embarazo;
