import React from 'react';
import Hero from '../Component/Hero';
import Navbar from '../Component/Navbar';

const Home = () => {
  return (
    <>
    <Navbar/>
     <Hero />
      <p>Welcome to our website. This is the home page.</p>
    </>
  );
};

export default Home;
