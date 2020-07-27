import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    { route: '/mariana', name: 'Mariana' },
    { route: '/home/embarazo', name: 'Embarazo' },
    { route: '/home/newborn', name: 'Newborn' },
    { route: '/home/baby', name: 'Baby' },
    { route: '/home/bautizo', name: 'Bautizo' },
    { route: '/home/smash', name: 'Smash Cake' },
    { route: '/estudio', name: 'Estudio' },
    { route: '/contacto', name: 'Contacto' },
  ];
  const toogleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  const toggleNavbar = () => {
    setNavbarStatus(!navbarStatus);
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
      <div className="spacing-navbar"></div>
      <div className={`navbar${navbarStatus ? '' : ' hide-navbar'}`}>
        <div className="navbar-logo">
          <Link to="/" onClick={closeMenu}>
            <img src={LogoPink} alt="Mariana Enciso Logo" />
          </Link>
        </div>
        <NavbarOptions
          menuStatus={menuStatus}
          options={options}
          closeMenu={closeOnClick}
        />
        <HamburgerMenu icon={Icon} toogleMenu={toogleMenu} />
        <div
          className={`show-hide-menu d-big-none ${
            !navbarStatus && 'change-status'
          }`}
          onClick={toggleNavbar}
        ></div>
      </div>
    </>
  );
};

export default Navbar;
