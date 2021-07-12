import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('thingy', () => {
  render(<App />);
  const linkElement: HTMLElement = screen.getByText(/thingy/i);
  expect(linkElement).toBeInTheDocument();
});
