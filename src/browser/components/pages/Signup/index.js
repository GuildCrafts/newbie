import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      signedUp: true
    }
  }

  componentWillMount() {
    this.getUser()
  }

  componentDidMount() {
    this.redirectToSignUp()
  }

  redirectToSignUp(){
    //check if user exists in db
    if ( !this.state.signedUp ) {
      browserHistory.push('/signup')
    }
  }

  getUser(){
    //fetch current user from idm
    //set user in state
  }

  render () {

    return (<div>Dashboard</div>)
  }
}
