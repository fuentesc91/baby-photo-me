import React from 'react';

import Navbar from './components/navbar/Navbar';
import MainSlider from './components/MainSlider';
import Embarazo from './components/Embarazo';
import NewBorn from './components/NewBorn';
import Baby from './components/Baby';
import Bautizo from './components/Bautizo';
import Smash from './components/Smash';

import Footer from './components/Footer';

import './app.scss';

const App = () => {
  return (
    <div className="site-container container-fluid">
      <Navbar />
      <MainSlider />
      <Embarazo />
      <NewBorn />
      <Baby />
      <Bautizo />
      <Smash />
      <Footer />
    </div>
  );
};

export default App;
