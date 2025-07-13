import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  z-index: 50;
`;

const Icon = styled.i`
  font-size: 3rem;
  animation: spin 1s linear infinite;
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const LoadingScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;
  return (
    <Overlay id="loadingScreen">
      <Icon className="fas fa-spinner" />
      <p className="text-2xl font-bold mt-4">LOADING...</p>
    </Overlay>
  );
};

export default LoadingScreen;
