import React from 'react';
import Search from '../search/Search.jsx'
import DisplayView from '../displayView/DisplayView.jsx'
import Loader from '../loader/Loader.jsx'
import {getAllTasks} from '../../network/ClickTimeAPI/ClickTimeAPI';

/**
 * Creates an array of {name, id} pairs from the
 * task data object
 *
 * @return array
 */
const _getNameIdPairs = function(taskDict) {
  let pairs = []
  for (let id in taskDict) {
    pairs.push({
      name: taskDict[id].Name,
      id: id
    })
  }
  return pairs
}

class TaskWidget extends React.Component {

  /**
   * Loads Tasks asynchronously and then updates the state.
   */
  load() {
    const creds = this.props.credentials
    getAllTasks(creds.companyID, creds.userID)
      .then( (data) => {
        this.setState({
          tasks: data,
          namePairs: _getNameIdPairs(data),
          isLoaded: true
        })
       })
  }

  /**
   * Selects a specific task
   */
  selectTask(id) {
    this.setState({ selectedTask: this.state.tasks[id] })
  }

  constructor(props) {
    super(props)
    this.state = { selectedTask: {}, tasks: {}, namePairs: [] }
    this.load()
  }

  render() {
    return (
      <div className="taskWidget container">

        {this.state.isLoaded ? (

          <div>
            <div className="header">
              <h4> Tasks </h4>
              <Search items={ this.state.namePairs }
                onSelect={ this.selectTask.bind(this) } />
            </div>

            <div className="card">
              <DisplayView selectedTask={ this.state.selectedTask } />
            </div>
          </div>
        ) : (
          <Loader loaderMessage="Logging in..."/>
        )}
      </div>
    )
  }
}

export default TaskWidget;
