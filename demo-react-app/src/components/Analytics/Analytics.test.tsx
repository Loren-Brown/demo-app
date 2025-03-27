import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Analytics from './Analytics';

describe('<Analytics />', () => {
  test('it should mount', () => {
    render(<Analytics />);

    const analytics = screen.getByTestId('Analytics');

    expect(analytics).toBeInTheDocument();
  });
});