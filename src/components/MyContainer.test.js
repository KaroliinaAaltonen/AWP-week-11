// MyContainer.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import MyContainer from './MyContainer';

test('renders wrapped component with "wrapper" class', () => {
  render(<MyContainer />);
  
  const wrapperElement = screen.getByTestId('wrapper'); // Use an appropriate data-testid
  const innerComponent = screen.getByText(/Hello Kalle!/i);

  expect(wrapperElement).toBeInTheDocument();
  expect(wrapperElement).toContainElement(innerComponent);
});
