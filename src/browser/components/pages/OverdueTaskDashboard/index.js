import  React, { Component } from 'react'
import OverdueTaskList from '../../molecules/Task/index'
import { fetchURL, toStandardDate } from '../../../common/utils'
import moment from 'moment'
import styles from './index.css'

export default class OverdueTaskDashboard extends Component {

  render() {
    return (
      <div>
        <div>
          <h1>Overdue Tasks</h1>
          {/* <Button onClick='goBackToAdminDashboard'/> */}
        </div>
        <Task due_date='05-03-17'/>
      </div>
    )
  }
}
