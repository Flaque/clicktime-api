import React from 'react';
import {getSession} from '../network/ClickTimeAPI/ClickTimeAPI';
import TaskWidget from './TaskWidget/TaskWidget.jsx';
import Loader from './loader/Loader.jsx';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {isLoggedIn : false}
  }

  componentDidMount() {
    getSession().then( (data) => {
      this.setState({
        credentials : {userID: data.UserID, companyID: data.CompanyID },
        isLoggedIn : true
      })
    })
  }

  render() {
    let isLoggedIn = this.state.isLoggedIn
    return (
      <div id="App">
        {isLoggedIn ? (
          <TaskWidget credentials={this.state.credentials} />
        ) : (
          <Loader loaderMessage="Pretending to Login..."/>
        )}
      </div>
    )
  }
}

export default App;
