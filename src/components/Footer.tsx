import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const FooterBar = styled.footer`
  width: 100%;
  background: #131313;
  color: #ccc;
  padding: 2rem 0 1.4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -2px 14px rgba(0,0,0,0.07);
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.2rem;
  margin-bottom: 1.1rem;
`;

const IconButton = styled.a`
  background: #23272f;
  border: none;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  transition: background 0.17s, transform 0.17s;
  cursor: pointer;
  font-size: 2.1rem;

  &:hover {
    background: #333;
    transform: scale(1.15);
  }

  svg {
    color: #22d3ee;
    width: 2rem;
    height: 2rem;
    display: block;
  }
`;

const Copy = styled.div`
  font-size: 1rem;
  letter-spacing: 0.2px;
  text-align: center;
  margin-top: 0.6rem;
`;

const Footer: React.FC = () => (
  <FooterBar>
    <SocialLinks>
      <IconButton
        href="https://linkedin.com/in/sghimire01"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </IconButton>
      <IconButton
        href="https://github.com/sghimire01"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </IconButton>
    </SocialLinks>
    <Copy>
      &copy; {new Date().getFullYear()} Samyak Ghimire. All rights reserved.
    </Copy>
  </FooterBar>
);

export default Footer;
