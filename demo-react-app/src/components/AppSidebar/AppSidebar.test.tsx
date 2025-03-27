import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AppSidebar from './AppSidebar';

describe('<AppSidebar />', () => {
  test('it should mount', () => {
    render(<AppSidebar />);

    const appSidebar = screen.getByTestId('AppSidebar');

    expect(appSidebar).toBeInTheDocument();
  });
});