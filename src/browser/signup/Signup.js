import React, { Component } from 'react'
import CreateNewbie from './CreateNewbie'

export default class Signup extends Component {
  constructor() {
    super()
    this.state = {
      showNewbieForm: false
    }
  }

  renderNewbieForm = () =>
    this.setState({ showStartDate: !this.state.showNewbieForm })

  signUp = role => {
    console.log(`Signing up new ${role}!`)
  }

  render() {
    const newbieForm = this.state.showNewbieForm
      ? <CreateNewbie />
      : null

    return (
      <div>
        <div>Choose your role</div>
        <button onClick={() => this.signUp('mentor')}>Mentor</button>
        <button onClick={this.renderNewbieForm}>Noob</button>
        {newbieForm}
      </div>
    )
  }
}
