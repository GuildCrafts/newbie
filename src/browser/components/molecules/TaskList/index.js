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
    const fetchDetails = {
      method: 'GET',
      mode: 'cors',
      headers: new Headers({
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json',
         }),
      credentials: 'same-origin'
    }
    fetch('/api/task', fetchDetails)
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

  buildTasksJSX (tasks){
    return tasks.map( task =>
      <Task
        key={task.id}
        id={task.id}
        body={task.body}
        fetchTasks={this.fetchTasks.bind(this)}
        due_date={task.due_date}
        completed_on={task.updated_at}
        is_complete={task.is_complete}/>)
  }

  render() {
    const tasksGroupedByComplete = _.groupBy(this.state.tasks, (task) => task.is_complete)
    const inProgressTasks = tasksGroupedByComplete.false || []
    const completedTasks = tasksGroupedByComplete.true || []

    return (
      <div className={styles.TaskList}>
        <div>Tasks In Progress</div>
        <div> {this.buildTasksJSX(inProgressTasks)} </div>
        <br/>
        <div>
          <div>Completed Tasks</div>
          {this.buildTasksJSX(completedTasks)}
         </div>
      </div>
    )
  }
}
