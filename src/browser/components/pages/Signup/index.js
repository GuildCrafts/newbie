import React, { Component } from 'react'
import ChooseStartDate from './ChooseStartDate'

export default class Signup extends Component {
  constructor() {
    super()
    this.state = {
      showStartDate: false
    }
  }

  toggleStartDate() {
    this.setState({ showStartDate: !this.state.showStartDate })
  }

  signUpRole(role) {
    console.log(`Signing up new ${role}!`)
  }

  render() {
    const startDatePicker = this.state.showStartDate ?
          <ChooseStartDate signUp={this.signUpRole}/> :
          null

    return (
        <div>
        <div>Choose your role</div>
        <div onClick={() => this.signUpRole('mentor')}>Mentor</div>
        <div onClick={this.toggleStartDate.bind(this)}>Newbie</div>
        {startDatePicker}
      </div>
    )
  }
}
