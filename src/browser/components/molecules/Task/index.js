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
      body: JSON.stringify({is_complete: true})
    }
    fetch( `/api/task/${this.props.task.id}`, options )
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

  computeDueDateLabel(task) {
    let diffInDays = moment(task.due_date).diff(moment(), 'days')
    if (task.is_complete)
      return null
    else if (diffInDays < 0)
      return {style:'danger',
              text: 'past due'}
    else if (diffInDays <= 1)
      return {style:'danger',
              text: 'due immediately'}
    else if (diffInDays <= 3)
      return {style:'warning',
              text: 'due soon'}
    else
      return null
  }

  render () {
    let task = this.props.task

    let dateString = utils.toStandardDate(task.due_date)

    let completeDate = task.is_complete
      ? `Completed at: ${utils.toStandardDate(task.completed_on)}`
      : null

    let completeButton = !task.is_complete
      ? <button className={styles.CompleteButton} ref='completeTask' onClick={this.isCompleteHandler.bind(this)}>Mark Complete</button>
      : null

    let dueDateJSX = !task.is_complete
      ? <div> Due : {dateString} </div>
      : null

    let badgeConfig = this.computeDueDateLabel(task)

    let badgeJSX;
    if(badgeConfig) {
      let classes = `label label-${badgeConfig.style}`
      badgeJSX = (<span className={classes}>{badgeConfig.text}</span>)
    }

    let listClass = this.props.isComplete ?
        'list-group-item list-group-item-success'
        : 'list-group-item list-group-item';

    return (
        <div className={listClass}>
          <div> <b>{task.title}</b>
            <div className=''>
              {task.description}
            </div>
          </div>
          <div className=''>
            <div> {dueDateJSX}
              <div className=''>
                <span>{completeDate}</span>
                {completeButton}
                {badgeJSX}
                </div>
            </div>
          </div>
        </div>
    )
  }
}
