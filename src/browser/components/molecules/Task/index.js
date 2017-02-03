import React, { Component } from 'react'
import Layout from '../../molecules/Layout/index'
import styles from './index.css'
const moment = require('moment')
const utils = require( '../../../common/utils.js')



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
    fetch( `/api/task/${this.props.id}`, completeTaskDetails )
    .then( taskPromise => {
      return taskPromise.json()
    })
    .then( task => {
      this.props.fetchTasks()
    })
    .catch(err => {
      console.log('Error marking task complete', err);
      return err
    })
  }

  taskStyles(task){
    let ourStyles = {
      mainDiv: styles.TaskDiv,
    }
    if( task.is_complete ){
      ourStyles.mainDiv = styles.TaskComplete
      return ourStyles
    }

    let diffInDays = moment(task.due_date).diff(moment(), 'days')
    if (diffInDays < 0) {
      ourStyles.mainDiv = styles.PastDue
      return ourStyles
    } else if( diffInDays <= 1) {
      ourStyles.mainDiv = styles.SoonDue
      return ourStyles
    } else if( diffInDays <= 3) {
      ourStyles.mainDiv = styles.NearDue
      return ourStyles}
      else {
        return ourStyles
    }
  }

  render () {
    let completeButton = !this.props.is_complete
      ? <button className={styles.CompleteTask} ref='completeTask' onClick={this.isCompleteHandler}>Task Completed</button>
      : null

    let dateString = utils.toStandardDate(this.props.due_date)
    let completeDate = this.props.is_complete
      ? `Complete at: ${utils.toStandardDate(this.props.completed_on)}`
      : null

    let ourStyle = this.taskStyles(this.props)
    let mainStyle = ourStyle.mainDiv
    let dueStyle = ourStyle.dueDateDiv

    return (
      <div>
        <div className={mainStyle}>
          <div className={styles.TaskBody}>
            {this.props.body}
          </div>
          <div className={dueStyle}> Due Date: {dateString} </div>
          <div>{completeDate}</div>
          {completeButton}
        </div>
      </div>
    )
  }
}
