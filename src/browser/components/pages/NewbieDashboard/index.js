import React, { Component } from 'react'
import GenericDashboard from '../GenericDashboard/index'
import { fetchURL, toStandardDate } from '../../../common/utils'
import moment from 'moment'

export default class NewbieDashboard extends Component {
  constructor(props){
    super(props)
      this.state = { currentNewbie: [] }
  }

  componentWillMount(){
    this.fetchCurrentUser()
  }

  fetchCurrentUser(){
    fetchURL('/api/noob/:githubHandle')
      .then(currentNewbie => {
        this.setState({currentNewbie: currentNewbie})
        console.log( "!!!!!!", this.state )
      })
  }

  render() {
    const newbie = this.state.currentNewbie
    const startDate = toStandardDate(newbie.start_date)
    return (
      <div>
        <h3>Welcome To Learners Guild {newbie.full_name}!</h3>
        <h3>Your Start Date: {startDate}</h3>
        <GenericDashboard />
      </div>)
  }
}
