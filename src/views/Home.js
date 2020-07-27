import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MainSlider from './MainSlider';
import Embarazo from './Embarazo';
import NewBorn from './NewBorn';
import Baby from './Baby';
import Bautizo from './Bautizo';
import Smash from './Smash';

const Home = () => {
  const param = useParams();

  useEffect(() => {
    const section = document.getElementById(param.id);
    if (section) {
      section.scrollIntoView();
    }
  }, [param.id]);

  return (
    <>
      <MainSlider />
      <Embarazo />
      <NewBorn />
      <Baby />
      <Bautizo />
      <Smash />
    </>
  );
};

export default Home;
