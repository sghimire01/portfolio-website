import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  background: #000;
  color: #fff;
  padding: 1.5rem 0;
`;

const Container = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media(min-width:768px) {
    flex-direction: row;
  }
`;

const Social = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media(min-width:768px) {
    margin-top: 0;
  }
`;

const Icon = styled.i`
  font-size: 1.5rem;
`;

const Footer: React.FC = () => (
  <Foot>
    <Container>
      <p>&copy; 2025 Your Name</p>
      <Social>
        <a href="https://github.com/sghimire01" target="_blank" rel="noreferrer"><Icon className="fab fa-github" /></a>
        <a href="https://www.linkedin.com/in/sghimire01/" target="_blank" rel="noreferrer"><Icon className="fab fa-linkedin" /></a>
        <a href="https://twitter.com/sghimire01" target="_blank" rel="noreferrer"><Icon className="fab fa-twitter" /></a>
      </Social>
    </Container>
  </Foot>
);

export default Footer;
