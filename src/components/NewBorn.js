import React from 'react';

import SectionTitle from './section-title/SectionTitle';
import Slider from './slider/Slider';

import NewbornTitle from '../img/lettering/newborn.png';

import newborn01 from '../img/newborn/newborn01.jpg';
import newborn02 from '../img/newborn/newborn02.jpg';
import newborn03 from '../img/newborn/newborn03.jpg';
import newborn04 from '../img/newborn/newborn04.jpg';

const Newborn = () => {
  const images = [newborn01, newborn02, newborn03, newborn04];

  return (
    <div id="newborn">
      <SectionTitle
        title={NewbornTitle}
        textTitle="Newborn"
        description="De los 7 a los 20 días de nacido"
      />
      <Slider images={images} />
    </div>
  );
};

export default Newborn;