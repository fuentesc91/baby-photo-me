import React from 'react';

import SectionTitle from './section-title/SectionTitle';
import Slider from './slider/Slider';

import BautizoTitle from '../img/lettering/bautizo.png';

import bautizo01 from '../img/bautizo/bautizo01.jpg';
import bautizo02 from '../img/bautizo/bautizo02.jpg';
import bautizo03 from '../img/bautizo/bautizo03.jpg';
import bautizo04 from '../img/bautizo/bautizo04.jpg';

const Bautizo = () => {
  const images = [bautizo01, bautizo02, bautizo03, bautizo04];

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
