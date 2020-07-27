import React from 'react';

import SectionTitle from '../components/section-title/SectionTitle';
import Slider from '../components/slider/Slider';

import BabyTitle from '../img/lettering/baby.png';

import baby01 from '../img/baby/baby01.jpg';
import baby02 from '../img/baby/baby02.jpg';
import baby03 from '../img/baby/baby03.jpg';
import baby04 from '../img/baby/baby04.jpg';
import baby05 from '../img/baby/baby05.jpg';
import baby06 from '../img/baby/baby06.jpg';

const Baby = () => {
  const images = [
    { image: baby01, vertical: false },
    { image: baby02, vertical: false },
    { image: baby03, vertical: false },
    { image: baby04, vertical: true },
    { image: baby05, vertical: false },
    { image: baby06, vertical: true },
  ];

  return (
    <div id="baby">
      <SectionTitle
        title={BabyTitle}
        textTitle="Baby"
        description="De los 4 a los 11 meses de edad"
        baby={true}
      />
      <Slider images={images} />
    </div>
  );
};

export default Baby;
