import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio heading', () => {
  render(<App />);
  const heading = screen.getByText(/highlighted projects/i);
  expect(heading).toBeInTheDocument();
});
