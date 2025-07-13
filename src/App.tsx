import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => (
  <div className="App">
    <NavBar />
    <Hero />
    <Projects />
    <Footer />
  </div>
);

export default App;
