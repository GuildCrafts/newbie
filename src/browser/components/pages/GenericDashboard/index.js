import React, { Component } from 'react'
import TaskList from '../../molecules/TaskList/index'

export default class GenericDashboard extends Component{

  render () {
    return(
        <div>
        <h3>{this.props.title}</h3>
        <TaskList />
        </div>
    )
  }
}
