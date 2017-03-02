import React, { Component } from 'react'
import {fetchURL, toStandardDate } from '../../../common/utils'
import moment from 'moment'
import styles from './index.css'

export default class OverdueTaskList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks:[],
      users:[]
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
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }),
      credentials: 'same-origin'
    }
    fetch('api/task/all', options)
    .then( data => {
      return data.json()
    })
    .then (result => {
      const tasks = result[0]
      const users = result[1]
      this.setState({
        tasks: tasks.filter(this.isOverdue),
        users: users
      })
    })
    .catch( err => {
      return err
    })
  }

  findGithubHandelByUUID( user_id ){
    for( let user of this.state.users ){
      if ( user.id == user_id ){
        return user.github_handle
      }
    }
    return "no github_handle found"
  }

  findEmailByUUID( user_id ){
    for( let user of this.state.users ){
      if( user.id == user_id ){
        if(user.email !== null) {
          return (
            <a href={`mailto:${user.email}`}>
              {this.findGithubHandelByUUID(user.id)}
            </a>
          )
        }
      }
    }
    return this.findGithubHandelByUUID(user_id)
  }

  isOverdue(task){
    if (moment().isAfter(task.due_date) && task.is_complete === false){
      return true
    }
  }

  daysOverdue(task_due_date) {
    let diffInDays = Math.abs(moment(task_due_date).diff(moment(), 'days'))

    return (
      <span className="label label-danger">Overdue By: {diffInDays} days</span>
    )
  }

  render() {
    return (
      <div className='panel panel-info'>
        <div className='panel-heading'>
          <div className='panel-title'>Overdue Tasks</div>
        </div>
        <div className='panel-body'>
          <div className='list-group'>
            <table className='table'>
              <thead>
                <tr>
                  <th> GitHub Handle </th>
                  <th> Title </th>
                  <th> Description </th>
                  <th> Days Overdue </th>
                </tr>
              </thead>
              <tbody>
                {this.state.tasks.map(task =>
                  <tr key={task.id}>
                    <td>
                      {this.findEmailByUUID(task.user_id)}
                    </td>
                    <td>
                      {task.title}
                    </td>
                    <td>
                      {task.description}
                    </td>
                    <td>
                      {this.daysOverdue(task.due_date)}
                    </td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
