import React from 'react';
import Loader from '../Loader.jsx';
import renderer from 'react-test-renderer';

test('Test that Loader is still the same', () => {
  const tree = renderer.create(
    <Loader loaderMessage="test load" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
