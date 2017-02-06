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

  taskStyles(task){
    let ourStyles = {
      mainStyle: styles.TaskDiv,
      notifyText: ''
    }
    if( task.is_complete ){
      ourStyles.mainStyle = styles.TaskComplete
      return ourStyles
    }

    let diffInDays = moment(task.due_date).diff(moment(), 'days')
    if (diffInDays < 0) {
      ourStyles.mainStyle = styles.PastDue
      ourStyles.notifyText = 'Past Due!'
      return ourStyles
    } else if( diffInDays <= 1) {
      ourStyles.mainStyle = styles.SoonDue
      ourStyles.notifyText = 'Due Immediately!'
      return ourStyles
    } else if( diffInDays <= 3) {
      ourStyles.mainStyle = styles.NearDue
      ourStyles.notifyText = 'Due Soon'
      return ourStyles}
      else {
        return ourStyles
    }
  }

  render () {
    let task = this.props.task

    let dateString = utils.toStandardDate(task.due_date)

    let completeDate = task.is_complete
      ? `Complete at: ${utils.toStandardDate(task.completed_on)}`
      : null

    let completeButton = !task.is_complete
      ? <button className={styles.CompleteButton} ref='completeTask' onClick={this.isCompleteHandler.bind(this)}>Mark Complete</button>
      : null

    let dueDateJSX = !task.is_complete
      ? <div> Due : {dateString} </div>
      : null

    let {mainStyle, notifyText} = this.taskStyles(task)

    let notifyTextJSX = notifyText
    let notifyCircle = <div className={styles.NotifyCircle}></div>

    return (
      <div>
        <div className={mainStyle}>
          <div> <b>{task.title}</b>
            <div className={styles.TaskDescription}>
              {task.description}
            </div>
          </div>
          <div className={styles.DueDateDiv}>
            <div> {dueDateJSX}
              <div className={styles.NotifyWrapper}>
                {notifyCircle}
                <div className={styles.NotifyText}>{notifyTextJSX}</div><div>{completeDate}</div>
                </div>
            </div>
            {completeButton}
          </div>
        </div>
      </div>
    )
  }
}
