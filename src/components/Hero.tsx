import React from 'react';
import styled, { keyframes } from 'styled-components';
import heroImage from '../images/head-bg.gif';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  color: #fff;
  overflow: hidden;
`;

const Background = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
  z-index: -1;
`;

const Content = styled.div`
  padding: 1rem;
  z-index: 1;
  animation: ${fadeUp} 1s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ResumeButton = styled.a`
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  background: #2563eb;
  color: #fff;
  border-radius: 9999px;
  &:hover { background: #1e40af; }
`;

const Hero: React.FC = () => (
  <Section id="lead">
    <Content>
      <h1 className="text-5xl font-bold">Welcome</h1>
      <p className="text-lg">This is my portfolio built with React and TypeScript.</p>
      <ResumeButton href="resumes/Ghimire 2023 currentResumeCS.pdf" target="_blank" rel="noreferrer">Resume</ResumeButton>
    </Content>
    <Background src={heroImage} alt="background" />
  </Section>
);

export default Hero;
