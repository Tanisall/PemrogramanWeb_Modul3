import React from 'react';
import {useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (to) => {
    navigate(to);
  };

  return (
    <>
    <h1>Navbar</h1>
    <nav>
      <ul>
        <li>
          <button onClick={() => handleNavigation('/')}>Home</button>
        </li>
        <li>
          <button onClick={() => handleNavigation('/about')}>About Us</button>
        </li>
        <li>
          <button onClick={() => handleNavigation('/contact')}>Contact</button>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
