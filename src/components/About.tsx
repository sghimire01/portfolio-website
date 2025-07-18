// src/AboutMe.tsx
import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #22223a;
  backdrop-filter: blur(8px);
  border-radius: 2rem;
  box-shadow: 0 4px 32px rgba(0,0,0,0.08);
  max-width: 700px;
  margin: 2rem auto;
  
  scroll-margin-top: 60px;
  @media (max-width: 600px) {
    scroll-margin-top: 55px;
    padding: 2rem 0.5rem;
    border-radius: 1.2rem;
  }
`;

const Avatar = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  margin-bottom: 0.5rem;
  border: 3px solid #fff;
`;

const Name = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.5rem;
  letter-spacing: -1px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #b6b6d8;
  text-align: center;
  margin-bottom: 1.3rem;
  max-width: 500px;
`;

const TagList = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Tag = styled.span`
  background: #fff;
  color: #7f5af0;
  font-size: 0.95rem;
  padding: 0.35rem 1rem;
  border-radius: 999px;
  font-weight: 600;
`;

const AboutMe: React.FC = () => (
  <AboutSection id='about'>
    <Avatar src="../assets/headshot.png" alt="Samyak Ghimire" />
    <Name>About Me</Name>
    <Description>
      I am a software engineer specializing in designing and building robust, scalable data platforms and innovative applications. My professional experience spans across industries, including medtech, where I have developed high-performance Python REST APIs, automated large-scale ETL workflows, and created custom machine learning solutions to enhance analytics and operational efficiency.

    <br/> <br/> I thrive in dynamic, collaborative environments, successfully leading and contributing to full-stack projects such as Dockerized web applications integrated with machine learning models and interactive social and gaming platforms. My technical proficiency, combined with a strong ability to adapt and collaborate, allows me to consistently deliver impactful solutions aligned with strategic business goals.

    <br/> <br/>Committed to continuous learning and growth, I leverage my technical expertise and collaborative mindset to drive meaningful results and support the success of the teams and organizations I join.
    </Description>
    <TagList>
      <Tag>Programming</Tag>
      <Tag>Engineering</Tag>
      <Tag>Analysis</Tag>
    </TagList>
  </AboutSection>
);

export default AboutMe;
