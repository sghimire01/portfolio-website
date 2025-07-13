import React from 'react';
import './Hero.css';
import heroImage from '../images/head-bg.gif';

const Hero: React.FC = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Welcome</h1>
      <p>This is my portfolio built with React and TypeScript.</p>
    </div>
    <img className="hero-bg" src={heroImage} alt="background" />
  </section>
);

export default Hero;
