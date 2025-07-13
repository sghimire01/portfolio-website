import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900.css';
import '@fontsource/nunito/700.css';
import '@fontsource/nunito/800.css';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
    background: rgb(29, 29, 29); /* match your loading screen! */
    overflow-x: hidden;
  }
  #root, #app {
    min-height: 100vh;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default GlobalStyle;
