import React from 'react';

const HamburgerMenu = ({ icon, toogleMenu }) => {
  return (
    <div className="navbar-hamburger-menu" onClick={toogleMenu}>
      <img src={icon} alt="hamburger menu" />
    </div>
  );
};

export default HamburgerMenu;
