import React, { Component } from 'react'
import Layout from '../../molecules/Layout/index'
import TaskList from '../../molecules/TaskList/index'
import styles from './index.css';


export default class MentorDashboard extends Component{

  render () {
    return(
    <div>
      <img src='https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C48%2C1536%2C768' height='100px' />
      <TaskList />
    </div>)
  }
}
