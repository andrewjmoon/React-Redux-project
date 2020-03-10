import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

test('Welcome to the About Page', () => {
  const { getByText } = render(<About />);
  const linkElement = getByText(/Welcome to the About Page/i);
  expect(linkElement).toBeInTheDocument();
});

describe('About', () => {
  it('should render an about view', () => {
    const { getByTestId } = render(<About />);
    expect(getByTestId('about-view')).toBeInTheDocument();
  });
});
