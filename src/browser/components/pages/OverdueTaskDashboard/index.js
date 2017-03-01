import  React, { Component } from 'react'
import OverdueTaskList from '../../molecules/OverdueTaskList/index'
import { fetchURL, toStandardDate } from '../../../common/utils'
import moment from 'moment'

export default class OverdueTaskDashboard extends Component {

  render() {
    return (
      <div>
        <div>
          <h1>Overdue Tasks</h1>
          {/* <Button onClick='goBackToAdminDashboard'/> */}
        </div>
        <OverdueTaskList/>
      </div>
    )
  }
}
