import React, { Component } from 'react'
import Layout from '../../molecules/Layout/index'
import TaskList from '../../molecules/TaskList/index'
import styles from './index.css';


export default class NoobDashboard extends Component{

  render () {
    return(
    <div>
      <img src='http://i0.kym-cdn.com/photos/images/facebook/000/234/765/b7e.jpg' height='100px' />
      <TaskList />
    </div>)
  }
}
