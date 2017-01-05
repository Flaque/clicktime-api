import React from 'react';
import Search from '../search/Search.jsx'
import {getAllTasks} from '../../network/ClickTimeAPI/ClickTimeAPI';

const getNameIdPairs = function(taskDict) {
  let pairs = []
  for (let id in taskDict) {
    pairs.push({
      name: taskDict[id].Name,
      id: id,
      isLoaded: false
    })
  }
  return pairs
}

class TaskWidget extends React.Component {

  constructor(props) {
    super(props)
    this.state = { tasks: {}, namePairs: [] }
    this.load()
  }

  /**
   * Loads Tasks Async
   */
  load() {
    const creds = this.props.credentials
    getAllTasks(creds.companyID, creds.userID)
      .then( (data) => {
        this.setState({
          tasks: data,
          namePairs: getNameIdPairs(data),
          isLoaded: true
        })
       })
  }

  render() {
    return (
      <div className="taskWidget card">
        <h3> Tasks </h3>
        {this.state.isLoaded ? (
          <Search items={ this.state.namePairs }/>
        ) : (
          <p> Getting things ready... </p>
        )}
      </div>
    )
  }
}

export default TaskWidget;
