import React from 'react';
import DisplayView from '../DisplayView.jsx';
import renderer from 'react-test-renderer';

const mockTask = {
  DisplayName: "task",
  jobs: [{
    DisplayName: "job",
    JobID: '1',
    client: {
      DisplayName: "client"
    }
  }]
}

test('Test that DisplayView is still the same', () => {
  const tree = renderer.create(
    <DisplayView selectedTask={mockTask} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
