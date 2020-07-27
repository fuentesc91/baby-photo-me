import React from 'react';

import MarianaTitle from '../img/lettering/mariana.png';

import './styles/Mariana.scss';

const Mariana = () => {
  return (
    <div className="mariana-container">
      <div className="mariana-title">
        <img src={MarianaTitle} alt="" />
      </div>
      <div className="mariana-photo"></div>
      <div className="mariana-quote cursive">
        <p className="position-relative">
          “Amo ser quien capture por siempre, los recuerdos más hermosos de tu
          bebé”
          <span className="author">Mariana Enciso</span>
        </p>
      </div>
      <div className="bottom-line bottom-line-blue bottom-line-mariana"></div>
      <div className="mariana-description">
        He tomado los talleres de: Newborn con{' '}
        <span className="font-weight-bold">
          Marcela Cantú Master Class Photographers,
        </span>{' '}
        el taller de{' '}
        <span className="font-weight-bold">
          Seguridad Neonatal en la Fotografía
        </span>{' '}
        por Helena Portela de BAST y el taller de{' '}
        <span className="font-weight-bold">Primeros Auxilios Neonatales</span>{' '}
        por parte de la Cruz Roja Mexicana.
      </div>
    </div>
  );
};

export default Mariana;
