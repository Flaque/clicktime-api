import React from 'react';
import Search from '../search/Search.jsx'
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
    this.state = { tasks: {}, namePairs: [] }
  }

  componentDidMount() {
    const creds = this.props.credentials
    getAllTasks(creds.companyID, creds.userID)
      .then( (data) => {
        this.setState({tasks: data, namePairs: getNameIdPairs(data) })
       })
  }

  render() {
    return (
      <div className="taskWidget card">
        <h3> Tasks </h3>
        <Search items={ this.state.namePairs }/>
      </div>
    )
  }
}

export default TaskWidget;
