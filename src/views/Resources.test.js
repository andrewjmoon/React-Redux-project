import React from 'react';
import { render } from '@testing-library/react';
import Resources from './Resources';

test('Resources for the Would You Prefer Game', () => {
  const { getByText } = render(<Resources />);
  const linkElement = getByText(/Resources for the Would You Prefer Game/i);
  expect(linkElement).toBeInTheDocument();
});
describe('About', () => {
  it('should render a resource view', () => {
    const { getByTestId } = render(<Resources />);
    expect(getByTestId('resource-view')).toBeInTheDocument();
  });
});
