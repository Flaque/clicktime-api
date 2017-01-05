import React from 'react'
import ReactDOM from 'react-dom'
import App from './ui/App.jsx'
import {getSession, getAllTasks} from './network/ClickTimeAPI/ClickTimeAPI.js'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
