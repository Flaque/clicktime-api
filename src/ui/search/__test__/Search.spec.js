import React from 'react';
import Search from '../Search.jsx';
import renderer from 'react-test-renderer';

const mockFunction = () => { return }
const mockItems = [{name: 'blah', id: '123'}, {name: 'ya', id: 'jioe'}]

test('Test that Search is still the same', () => {
  const tree = renderer.create(
    <Search items={mockItems} onSelect={ mockFunction } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
