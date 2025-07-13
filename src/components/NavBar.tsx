import React from 'react';
import './NavBar.css';

const NavBar: React.FC = () => (
  <nav className="navbar">
    <h1 className="logo">My Portfolio</h1>
    <ul>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default NavBar;
