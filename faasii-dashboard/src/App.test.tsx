import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome to FaaS Islamic Institute link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to FaaS Islamic Institute/i);
  expect(linkElement).toBeInTheDocument();
});
