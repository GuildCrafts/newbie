import React, { Component } from 'react'
import CreateNewbieForm from '../../molecules/CreateNewbieForm/index'
import styles from './index.css'
import BackButton from '../../atoms/BackButton'

export default class Signup extends Component {
  constructor() {
    super()
    this.state = {
      renderNewbieForm: false,
      mentorDisplay: true
    }
  }

  renderNewbieForm() {
    this.setState({ renderNewbieForm: !this.state.renderNewbieForm })
    this.setState({ mentorDisplay: !this.state.mentorDisplay})
  }

  signUpRole(role) {
    console.log(`Signing up new ${role}!`)
  }

  render() {
    let comboButtonBlue = 'btn btn-primary btn-lg ' + styles.customBtnBlue

    const renderNewbieForm = this.state.renderNewbieForm
      ? <CreateNewbieForm />
      : null

    const mentorButton = this.state.mentorDisplay
      ? <div>
          <p className={styles.messageText}>Hi! Are you a: </p>
          <button className={comboButtonBlue} onClick={this.renderNewbieForm.bind(this)}>New Learner</button>
          <p className={styles.messageText}>or</p>
          <button className={comboButtonBlue} onClick={() => this.signUpRole('mentor')}>Mentor</button>
        </div>
      : null

    return (
      <div className={styles.page}>
        <BackButton />
        <div className={styles.roleForm}>
          {mentorButton}
          {renderNewbieForm}
        </div>
      </div>
    )
  }
}
