import React, { Component } from 'react'

export default class SignupPage extends Component {

  render () {
    return (<div className="SignupPage">
      <div className="SignupPage-content">
        <div className="SignupPage-content-heading">
          Sign Up For Noob
        </div>
        <div className="SignupPage-content-buttons">
          <button className="SignupPage-content-mentorSignup">Sign Up As A Mentor</button>
          <button className="SignupPage-content-noobSignup">Sign Up As A Noob</button>
        </div>
      </div>
    </div>)
  }
}
