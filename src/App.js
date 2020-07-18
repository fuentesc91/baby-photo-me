import React from 'react';

import Navbar from './components/navbar/Navbar';
import MainSlider from './components/MainSlider';
import Embarazo from './components/Embarazo';

import './app.scss';

const App = () => {
  return (
    <div className="site-container container-fluid">
      <Navbar />
      <MainSlider />
      <Embarazo />
    </div>
  );
};

export default App;
