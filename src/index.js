import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './ui/App.jsx'
import {getSession, getAllTasks} from './network/ClickTimeAPI/ClickTimeAPI.js'

const mockCompanyID = '2UKgcxIb17NY';
const mockUserID = '2i86jjewbXL4';

getAllTasks(mockCompanyID, mockUserID).then(console.log)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
