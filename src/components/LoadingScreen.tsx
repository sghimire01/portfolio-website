import React from "react";
import styled, { keyframes } from "styled-components";

import logo from '../assets/logo.png';       
import loading from "../assets/loading.svg"; 

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const LoaderContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #070707 60%, #16181d 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.8s;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

const LogoImage = styled.img`
  width: 90px;
  height: 90px;
  margin-bottom: 18px;
  @media (max-width: 500px) {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
  }
`;

const LoaderImage = styled.img`
  width: 54px;
  height: 54px;
  margin-bottom: 24px;
  /* No spin animation! */
`;

const LoadingText = styled.div`
  color: #fff;
  font-size: 1.15rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-shadow: 0 2px 16px #000;
  margin-top: 0.5rem;
`;

const LoadingScreen: React.FC = () => (
  <LoaderContainer>
    <LogoImage src={logo} alt="Site Logo" />
    <LoaderImage src={loading} alt="Loading..." />
    <LoadingText>Loading Portfolio...</LoadingText>
  </LoaderContainer>
);

export default LoadingScreen;
