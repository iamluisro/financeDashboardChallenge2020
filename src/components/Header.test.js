import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';
import App from '../routes/App';

afterEach(cleanup);

it('<Header />', () => {
  render(<App><Header /></App>);
});

it('login renders when app initializes', () => {
  const { getByText } = render(<App><Header /></App>);
  expect(getByText(/Login/i).textContent).toBe('Login');
});

