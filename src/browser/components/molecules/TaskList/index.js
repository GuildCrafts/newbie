import React, { Component } from 'react'
import Layout from '../../molecules/Layout/index'
import Task from '../Task/index'
import styles from './index.css';
const moment = require('moment')

export default class TaskList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  componentWillMount(){
    this.loadTasks()
  }

  loadTasks(){
    const fetchDetails = {
      method: 'GET',
      mode: 'cors',
      headers: new Headers({
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json',
         }),
      credentials: 'same-origin'
    }
    fetch('http://noob.learnersguild.dev/api/task', fetchDetails)
    .then( data => {
      return data.json()
    })
    .then( result => {
      this.setState({
        tasks: result.sort((a,b) => {
          if( moment(a.due_date).isBefore(b.due_date) ){
            return -1
          } else {
            return 1
          }
        })
      })
    })
    .catch( err => {
      console.log('Error loading tasks', err);
      return err
    })
  }

  render() {
    const progressTasks = []
    const completedTasks = []
    for (let i of this.state.tasks){
      let theTask = <Task
        key={i.id}
        id={i.id}
        body={i.body}
        loadTasks={this.loadTasks.bind(this)}
        due_date={i.due_date}
        completed_on={i.updated_at}
        is_complete={i.is_complete}/>
      if(i.is_complete){
        completedTasks.push(theTask)
      } else {
        progressTasks.push(theTask)
      }
    }
    
    return (
      <div className={styles.TaskList}>
        <div>Tasks In Progress</div>
        <div> {progressTasks} </div>
        <br/>
        <div>
          <div>Completed Tasks</div>
          {completedTasks}
         </div>
      </div>
    )
  }
}
