import React, { useState, useEffect } from 'react';

// Components
import HamburgerMenu from './HamburgerMenu';
import NavbarOptions from './NavbarOptions';

// Images
import LogoPink from '../../img/logos/logo-pink.png';
import Icon from '../../img/icons/hamburger-menu.png';

import './navbar.scss';

const Navbar = ({ navbarStatus, setNavbarStatus }) => {
  const [menuStatus, setMenuStatus] = useState(false);

  useEffect(() => {
    if (!navbarStatus) {
      closeMenu();
    }
  }, [navbarStatus]);

  const options = [
    { id: 'mariana', name: 'Mariana' },
    { id: 'embarazo', name: 'Embarazo' },
    { id: 'newborn', name: 'Newborn' },
    { id: 'baby', name: 'Baby' },
    { id: 'bautizo', name: 'Bautizo' },
    { id: 'smash', name: 'Smash Cake' },
    { id: 'estudio', name: 'Estudio' },
    { id: 'contacto', name: 'Contacto' },
  ];
  const toogleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  const closeOnClick = () => {
    closeMenu();
    setTimeout(() => {
      setNavbarStatus(false);
    }, 600);
  };

  const closeMenu = () => {
    setMenuStatus(false);
  };

  return (
    <>
      <div className={`navbar${navbarStatus ? '' : ' hide-navbar'}`}>
        <div className="navbar-logo">
          <img src={LogoPink} alt="Mariana Enciso Logo" />
        </div>
        <NavbarOptions
          menuStatus={menuStatus}
          options={options}
          closeMenu={closeOnClick}
        />
        <HamburgerMenu icon={Icon} toogleMenu={toogleMenu} />
      </div>
    </>
  );
};

export default Navbar;
