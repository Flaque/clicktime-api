import React from 'react';
import TaskWidget from '../TaskWidget.jsx';
import renderer from 'react-test-renderer';

const mockCompanyID = '2UKgcxIb17NY';
const mockUserID = '2i86jjewbXL4';
const mockCredentials = {
  companyID : mockCompanyID,
  userID : mockUserID
}

test('Test that TaskWidget is still the same', () => {
  const tree = renderer.create(
    <TaskWidget credentials={mockCredentials}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
