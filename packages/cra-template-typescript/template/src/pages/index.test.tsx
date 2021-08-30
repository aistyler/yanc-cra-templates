import React from 'react';
import { render } from '@testing-library/react';
import Index from './';

test('renders Index', () => {
  const { container } = render(<Index />);
  // root element
  expect(container.firstChild).toBeTruthy();
});
