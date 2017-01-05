import React from 'react';
import Search from '../search/Search.jsx'

const items = [{name: 'hi', key: 213}, {name: 'hello', key: 233}]

class TaskWidget extends React.Component {
  render() {
    return (
      <div className="taskWidget card">
        <h3> Tasks </h3>
        <Search items={ items }/>
      </div>
    )
  }
}

export default TaskWidget;
