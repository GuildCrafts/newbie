import React, { Component } from 'react'
import GenericDashboard from '../GenericDashboard/index'
import ClaimNewbie from '../../molecules/ClaimNewbie/index'
import {fetchURL} from '../../../common/utils'

export default class MentorDashboard extends Component {
  constructor(props){
    super(props)
    this.state = {unassignedNewbies: {}}
    this.fetchUnassignedNewbies = this.fetchUnassignedNewbies.bind(this)
  }

  componentDidMount(){
    this.fetchUnassignedNewbies()
  }

  fetchUnassignedNewbies(){
    fetchURL('/api/noob/unassigned_mentor')
      .then(newbies => this.setState({unassignedNewbies: newbies}))
  }

  render() {
    return (<div>
              <h3>Mentor Dashboard</h3>
              <ClaimNewbie newbies={this.state.unassignedNewbies}
                updateUnassignedNewbiesCallback={this.fetchUnassignedNewbies} />
              <GenericDashboard />
            </div>)
  }
}
