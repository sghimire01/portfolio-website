import React from "react";
import styled from "styled-components";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import bgImg from '../assets/head-bg.gif';

const HeroSection = styled.section`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  padding: 64px 16px 32px 16px;
  position: relative;
  overflow: hidden;
  /* Use imported bgImg variable */
  background: 
    linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.75)),
    url(${bgImg}) center/cover no-repeat;
  
  @media (max-width: 600px) {
    padding: 32px 8px 16px 8px;
    min-height: 70vh;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0 0 24px 0;
  line-height: 1.1;
  letter-spacing: -2px;

  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: #b6b6d8;
  margin-bottom: 36px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 600px) {
    font-size: 1.02rem;
  }
`;

const HeroButton = styled.a`
  display: inline-block;
  padding: 14px 34px;
  font-size: 1.13rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(90deg, #7f5af0 40%, #2cb67d 100%);
  border: none;
  border-radius: 2rem;
  box-shadow: 0 6px 18px 0 rgba(0,0,0,0.07);
  cursor: pointer;
  transition: transform 0.18s, box-shadow 0.18s;
  text-decoration: none;
  margin-top: 8px;

  &:hover, &:focus {
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 10px 28px 0 rgba(127, 90, 240, 0.18);
    background: linear-gradient(90deg, #2cb67d 0%, #7f5af0 60%);
  }
`;

const Hero = () => (
  <HeroSection id="home">
    <HeroTitle>
      <Typewriter
        words={["Samyak Ghimire"]}
        loop={1}
        cursor
        cursorStyle="_"
        typeSpeed={90}
        deleteSpeed={90}
        delaySpeed={1000}
      />
    </HeroTitle>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.8 }}
      style={{
        marginBottom: "36px",
        fontSize: "1.3rem",
        color: "#b6b6d8",
        maxWidth: 600,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      Building elegant solutions to complex problems.
      <br />
      Software Engineering • Data Engineering • AI/ML
    </motion.h2>
    <HeroButton href="/Sam_Ghimire_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</HeroButton>
  </HeroSection>
);

export default Hero;
