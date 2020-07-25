import React from 'react';

import SectionTitle from './section-title/SectionTitle';
import Slider from './slider/Slider';

import SmashTitle from '../img/lettering/smash.png';

import smash01 from '../img/smash/smash01.jpg';
import smash02 from '../img/smash/smash02.jpg';
import smash03 from '../img/smash/smash03.jpg';
import smash04 from '../img/smash/smash04.jpg';
import smash05 from '../img/smash/smash05.jpg';
import smash06 from '../img/smash/smash06.jpg';

const Smash = () => {
  const images = [
    { image: smash01, vertical: false },
    { image: smash02, vertical: false },
    { image: smash03, vertical: false },
    { image: smash04, vertical: false },
    { image: smash05, vertical: false },
    { image: smash06, vertical: false },
  ];

  return (
    <div id="smash">
      <SectionTitle
        title={SmashTitle}
        textTitle="Smash"
        description="De los 11 meses a los 3 años de edad"
        smash={true}
      />
      <Slider images={images} />
    </div>
  );
};

export default Smash;
