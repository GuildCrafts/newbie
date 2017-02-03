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
  }

  isCompleteHandler( event ){
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json',
         }),
      credentials: 'same-origin',
      description: JSON.stringify({is_complete: true})
    }
    fetch( `/api/task/${this.props.id}`, options )
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
      mainStyle: styles.TaskDiv,
    }
    if( task.is_complete ){
      ourStyles.mainStyle = styles.TaskComplete
      return ourStyles
    }

    let diffInDays = moment(task.due_date).diff(moment(), 'days')
    if (diffInDays < 0) {
      ourStyles.mainStyle = styles.PastDue
      return ourStyles
    } else if( diffInDays <= 1) {
      ourStyles.mainStyle = styles.SoonDue
      return ourStyles
    } else if( diffInDays <= 3) {
      ourStyles.mainStyle = styles.NearDue
      return ourStyles}
      else {
        return ourStyles
    }
  }

  render () {
    let dateString = utils.toStandardDate(this.props.due_date)

    let completeDate = this.props.is_complete
      ? `Complete at: ${utils.toStandardDate(this.props.completed_on)}`
      : null

    let completeButton = !this.props.is_complete
      ? <button className={styles.CompleteTask} ref='completeTask' onClick={this.isCompleteHandler.bind(this)}>Task Completed</button>
      : null

    let dueDateJSX = !this.props.is_complete
      ? <div> Due Date: {dateString} </div>
      : null

    let {mainStyle} = this.taskStyles(this.props)

    return (
      <div>
        <div className={mainStyle}>
          <div className={styles.TaskDescription}>
            {this.props.description}
          </div>
          {dueDateJSX}
          <div>{completeDate}</div>
          {completeButton}
        </div>
      </div>
    )
  }
}
