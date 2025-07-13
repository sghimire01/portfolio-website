import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import GlobalStyle from './main';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay, e.g., 1.5 seconds
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

return (
  <div
    className="font-[Inter]"
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}
  >
    {loading && <LoadingScreen />}
    {!loading && (
      <>
        <GlobalStyle />
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </>
    )}
  </div>
);

};

export default App;
