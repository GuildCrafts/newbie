import React, { Component } from 'react'
import GenericDashboard from '../GenericDashboard/index'
import { fetchURL, toStandardDate } from '../../../common/utils'
import moment from 'moment'
import styles from './index.css'

export default class NewbieDashboard extends Component {
  constructor(props){
    super(props)
      this.state = {
        currentNewbieInfo: [],
        mentor: {}
      }
  }

  componentWillMount(){
    this.fetchCurrentUser()
  }

  fetchCurrentUser(){
    fetchURL('/api/noob')
      .then(currentNewbieInfo => {
        this.setState({
          currentNewbieInfo: currentNewbieInfo,
          mentor: currentNewbieInfo.mentor
        })
      })
  }

  render() {
    const startDate = toStandardDate(this.state.currentNewbieInfo.start_date)
    const mentor = this.state.mentor.full_name
      ? <h4>Mentor: {this.state.mentor.full_name}</h4>
      : null

    return (
      <div>
        <div className={styles.header}>
          <h1>Welcome To Learners Guild!</h1>
          <div className={styles.newbieInfo}>
            <h4>Start Date: {startDate}</h4>
            {mentor}
          </div>
        </div>
        <GenericDashboard />
      </div>
    )
  }
}
