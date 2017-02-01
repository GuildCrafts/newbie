import React, { Component } from 'react'
import Layout from '../../molecules/Layout/index'
import styles from './index.css'
const moment = require('moment')



export default class Task extends Component {
  constructor(props) {
    super(props)
    this.state = {
      complete: false
    }
    this.isCompleteHandler = this.isCompleteHandler.bind(this)
  }

  isCompleteHandler( event ){
    const completeTaskDetails = {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json',
         }),
      credentials: 'same-origin',
      body: JSON.stringify({is_complete: true})
    }
    fetch( `http://noob.learnersguild.dev/api/task/${this.props.id}`, completeTaskDetails )
    .then( resultPromise => {
      return resultPromise.json()
    })
    .then( result => {
      this.props.loadTasks()
    })
    .catch(err => {
      console.log('Error marking task complete', err);
      return err
    })
  }

  taskStyles(){
    if( this.props.is_complete ){ return styles.TaskComplete }

    let dueDate = moment(this.props.due_date)
    if (dueDate.isBefore(moment())) { return styles.PastDue }

    if( dueDate.subtract(1,'days').isBefore(moment())) { return styles.NearComplete }
    return styles.TaskDiv
  }

  render () {
    let completeButton = !this.props.is_complete
      ? <button className={styles.CompleteTask} ref='completeTask' onClick={this.isCompleteHandler}>Task Completed</button>
      : null

    let dateString = moment(this.props.due_date).format('MMMM DD YYYY')
    let completeDate = this.props.is_complete
      ? `Complete at: ${moment(this.props.completed_on).format('MMMM DD YYYY')}`
      : null

    let ourStyle = this.taskStyles()

    return (
      <div>
        <div className={ourStyle}>
          <div className={styles.TaskBody}>
            {this.props.body}
          </div>
          <div className={styles.DueDate}> Due Date: {dateString} </div>
          <div>{completeDate}</div>
          {completeButton}
        </div>
      </div>
    )
  }
}
