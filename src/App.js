import React from 'react';

import Slider from './components/slider/Slider';

import slide01 from './img/slider/slider01.jpg';
import slide02 from './img/slider/slider02.jpg';
import slide03 from './img/slider/slider03.jpg';
import slide04 from './img/slider/slider04.jpg';
import slide05 from './img/slider/slider05.jpg';

const App = () => {
  const imagesArray = [slide01, slide02, slide03, slide04, slide05];
  return (
    <>
      <Slider images={imagesArray} />
    </>
  );
};

export default App;
