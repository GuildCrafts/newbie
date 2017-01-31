import React, { Component } from 'react'
import StartDateForm from './StartDateForm'

export default class LandingPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      showingForm: false
    }
    this.noobSignup = this.noobSignup.bind(this)
  }

  mentorSignup(){
    console.log('mentor sign up')
  }

  noobSignup(){
    console.log('noob sign up')
    this.setState({showingForm: true})
  }

  render () {
    const startDateForm = this.state.showingForm ? <StartDateForm/> : null

    return (<div className="SignupPage">
      <div className="SignupPage-content">
        <div className="SignupPage-content-heading">
          Sign Up For Noob
        </div>
        <div className="SignupPage-content-buttons">
          <button onClick={this.mentorSignup} className="SignupPage-content-mentorSignup">Sign Up As A Mentor</button>
          <button onClick={this.noobSignup} className="SignupPage-content-noobSignup">Sign Up As A Noob</button>
        </div>
      </div>
      {startDateForm}
    </div>)
  }
}
