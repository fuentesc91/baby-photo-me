import React from 'react';

import SectionTitle from './section-title/SectionTitle';
import Slider from './slider/Slider';

import BautizoTitle from '../img/lettering/bautizo.png';

import bautizo01 from '../img/bautizo/bautizo01.jpg';
import bautizo02 from '../img/bautizo/bautizo02.jpg';
import bautizo03 from '../img/bautizo/bautizo03.jpg';
import bautizo04 from '../img/bautizo/bautizo04.jpg';

const Bautizo = () => {
  const images = [
    { image: bautizo01, vertical: false },
    { image: bautizo02, vertical: false },
    { image: bautizo03, vertical: false },
    { image: bautizo04, vertical: false },
  ];

  return (
    <div id="bautizo">
      <SectionTitle
        title={BautizoTitle}
        textTitle="Bautizo"
        description="Hasta los 12 años de edad"
      />
      <Slider images={images} />
    </div>
  );
};

export default Bautizo;
