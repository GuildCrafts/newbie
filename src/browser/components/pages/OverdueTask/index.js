import  React, { Component } from 'react'
import OverdueTaskList from '../../molecules/OverdueTaskList/index'
import { fetchURL, toStandardDate } from '../../../common/utils'
import moment from 'moment'

export default class OverdueTask extends Component {

  render() {
    return (
      <div className='container'>
        <div>
          <h1>Overdue Tasks</h1>
        </div>
        <OverdueTaskList/>
      </div>
    )
  }
}
