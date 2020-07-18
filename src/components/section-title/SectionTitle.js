import React from 'react';

import './SectionTitle.scss';

const SectionTitle = ({ title, textTitle, description, baby, smash }) => {
  return (
    <div className="section-title container-fluid">
      <div className="row row-title">
        <div className="col-3 col-md-4 dots dots-left"></div>
        <div className="col-6 col-md-4 section-title-tile">
          <h2
            className={`${baby ? 'baby-format' : ''}${
              smash ? 'smash-format' : ''
            }`}
          >
            <img src={title} alt={textTitle} />
          </h2>
        </div>
        <div className="col-3 col-md-4 dots dots-right"></div>
      </div>
      <div className="row row-description">
        <div className="col text-center title-description">
          <p className="hide-desktop">{description}</p>
          <p className="hide-mobile">Más info.</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
