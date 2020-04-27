import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Footer from './Footer';

it('<Footer />', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
});

it('Company Address Renders correcyly', () => {
  const { getByTestId } = render(<Footer />);
  expect(getByTestId('companyAddress')).toBeInTheDocument();
});

it('Luis Contact Renders correcyly', () => {
  const { getByTestId } = render(<Footer />);
  expect(getByTestId('LuisContact')).toBeInTheDocument();
});
