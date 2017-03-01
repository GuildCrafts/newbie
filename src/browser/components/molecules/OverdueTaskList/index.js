import React, { Component } from 'react'
import {fetchURL, toStandardDate } from '../../../common/utils'
import moment from 'moment'

export default class OverdueTaskList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  isOverdue(task){
    if (moment().isAfter(task.due_date) && task.is_complete === false){
      return true
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
    fetch('api/task/getAll', options)
    .then( data => {
      return data.json()
    })
    .then (result => {

      this.setState({
        tasks: result.filter(this.isOverdue)
      })
    })
    .catch( err => {
      console.log('Error loading tasks', err)
      return err
    })
  }


  render() {
    return (
      <div className='panel panel-info'>
        <div className='panel-heading'>
          <div className='panel-title'>Overdue Tasks</div>
        </div>
        <div className='panel-body'>
          <div className='list-group'>
            {this.state.tasks.map(task => <div>
              <span>
                {task.user_id}
              </span>
              <span>
                {task.title}
              </span>
              <span>
                {task.description}
              </span>
            </div>)}
          </div>
        </div>
      </div>
    )
  }
}
