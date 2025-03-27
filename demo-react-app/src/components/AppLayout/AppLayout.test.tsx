import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AppLayout from './AppLayout';

describe('<AppLayout />', () => {
  test('it should mount', () => {
    render(<AppLayout />);

    const appLayout = screen.getByTestId('AppLayout');

    expect(appLayout).toBeInTheDocument();
  });
});