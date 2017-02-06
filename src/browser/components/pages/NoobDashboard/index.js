import React, { Component } from 'react'
import Layout from '../../molecules/Layout/index'
import TaskList from '../../molecules/TaskList/index'
import styles from './index.css';


export default class NoobDashboard extends Component{

  render () {
    return(
    <div>
      Newbie Dashboard
      <TaskList />
    </div>)
  }
}
