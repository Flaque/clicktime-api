import React from 'react';
import Search from '../search/Search.jsx'
import DisplayView from '../displayView/DisplayView.jsx'
import Loader from '../loader/Loader.jsx'
import {getAllTasks} from '../../network/ClickTimeAPI/ClickTimeAPI';

const getNameIdPairs = function(taskDict) {
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

  constructor(props) {
    super(props)
    this.state = { selectedTask: {}, tasks: {}, namePairs: [] }
    this.load()
    this.passUpSelection = this.passUpSelection.bind(this)
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

  passUpSelection(id) {
    this.setState({ selectedTask: this.state.tasks[id] })
  }

  render() {
    return (
      <div className="taskWidget container">

        {this.state.isLoaded ? (

          <div>
            <div className="header">
              <h4> Tasks </h4>
              <Search items={ this.state.namePairs }
                onSelect={ this.passUpSelection.bind(this) } />
            </div>

            <div className="card">
              <DisplayView selectedTask={ this.state.selectedTask } />
            </div>
          </div>
        ) : (
          <Loader loaderMessage="Spinning up hamster..."/>
        )}
      </div>
    )
  }
}

export default TaskWidget;
