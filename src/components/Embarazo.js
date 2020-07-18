import React from 'react';

import SectionTitle from './section-title/SectionTitle';
import EmbarazoTitle from '../img/lettering/embarazo.png';

const Embarazo = () => {
  return (
    <div id="embarazo">
      <SectionTitle
        title={EmbarazoTitle}
        textTitle="Embarazo"
        description="A partir de las 28 semanas de embarazo"
      />
    </div>
  );
};

export default Embarazo;
