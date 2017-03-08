import React, { Component } from 'react'
import {fetchURL, toStandardDate } from '../../../common/utils'
import moment from 'moment'
import styles from './index.css'

export default class OverdueTaskList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks:[]
    }
  }

  componentDidMount(){
    fetchURL('api/task/tasksAndUsers')
    .then(results => {
    this.setState({
      tasks: results.filter(this.isOverdue),
      })
    })
    .catch(err => {
      return err
    })
  }


  findEmailByUUID( user_id ){
    for( let task of this.state.tasks ){
      if( task.user_id == user_id ){
        if(task.email !== null) {
          return (
            <a href={`mailto:${task.email}`}>
              {task.github_handle}
            </a>
          )
        } else {
          return task.github_handle
        }
      }
    }
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
