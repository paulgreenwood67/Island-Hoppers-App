//snapshot test

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import About from './About';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
