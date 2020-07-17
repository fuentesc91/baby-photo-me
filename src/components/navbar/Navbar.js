import React, { useState } from 'react';

// Components
import HamburgerMenu from './HamburgerMenu';
import NavbarOptions from './NavbarOptions';

// Images
import LogoPink from '../../img/logos/logo-pink.png';
import Icon from '../../img/icons/hamburger-menu.png';

import './navbar.scss';

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  const options = [
    { id: 'mariana', name: 'Mariana' },
    { id: 'pregnancy', name: 'Embarazo' },
    { id: 'newborn', name: 'Newborn' },
    { id: 'baby', name: 'Baby' },
    { id: 'christening', name: 'Bautizo' },
    { id: 'smash', name: 'Smash Cake' },
    { id: 'location', name: 'Ubicación' },
    { id: 'customer', name: 'Clientes' },
  ];

  const toogleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={LogoPink} alt="Mariana Enciso Logo" />
        </div>
        <NavbarOptions menuStatus={menuStatus} options={options} />
        <HamburgerMenu icon={Icon} toogleMenu={toogleMenu} />
      </div>
      <div className="line"></div>
    </>
  );
};

export default Navbar;
