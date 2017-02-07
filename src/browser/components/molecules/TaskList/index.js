import React, { Component } from 'react'
import Layout from '../../molecules/Layout/index'
import Task from '../Task/index'
import styles from './index.css';
const moment = require('moment')
const _ = require('lodash')

export default class TaskList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  componentDidMount(){
    this.fetchTasks()
  }

  fetchTasks(){
    const options = {
      method: 'GET',
      mode: 'cors',
      headers: new Headers({
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json',
         }),
      credentials: 'same-origin'
    }
    fetch('/api/task', options)
    .then( data => {
      return data.json()
    })
    .then( result => {
      this.setState({
        tasks: result.sort((a,b) => moment(a.due_date).isAfter(b.due_date) )
      })
    })
    .catch( err => {
      console.log('Error loading tasks', err);
      return err
    })
  }

  buildTasksJSX (tasks, isComplete){
    return tasks.map( task =>
      <Task
        key={task.id}
        task={task}
        isComplete={isComplete}
        fetchTasks={this.fetchTasks.bind(this)}/>)
  }

  renderTasksPanel(tasks, isComplete, options) {
    const tasksJSX = tasks.length ? this.buildTasksJSX(tasks, isComplete)
                     : <div className='well'>No tasks due!</div>
    return (
      <div className='panel panel-info'>
        <div className='panel-heading'>
          <div className='panel-title'>{options.title}</div>
        </div>
        <div className='panel-body'>
          <div className='list-group'>{tasksJSX}</div>
        </div>
      </div>
    );
  }

  render() {
    const tasksGroupedByComplete = _.groupBy(this.state.tasks, (task) => task.is_complete)
    const inProgressTasks = tasksGroupedByComplete.false || []
    const completedTasks = tasksGroupedByComplete.true || []

    return (
      <div className=''>
        {this.renderTasksPanel(inProgressTasks, false, {title: 'Tasks Due'})}
        <br/>
        {this.renderTasksPanel(completedTasks, true, {title: 'Tasks Completed'})}
      </div>
    )
  }
}
