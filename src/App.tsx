import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => (
  <div className="font-[Inter]">
    <LoadingScreen />
    <NavBar />
    <Hero />
    <Projects />
    <Footer />
  </div>
);

export default App;
