import React, { Component } from 'react'

export default class LandingPage extends Component {

  render () {
    return (<div className="LandingPage">
      <div className="LandingPage-content">
        <div className="LandingPage-content-heading">
          Sign In With IDM
        </div>
        <div className="LandingPage-content-buttons">
          <button className="LandingPage-content-signIn">Sign In With Github (IDM)</button>
        </div>
      </div>
    </div>)
  }
}
