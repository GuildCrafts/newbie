import React, { Component } from 'react'
import { signUpUser } from '../../../common/requests'
import CreateNewbieForm from '../../molecules/CreateNewbieForm/index'
import styles from './index.css'

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

  render() {
    let comboButtonBlue = 'btn btn-primary btn-lg ' + styles.customBtnBlue

    const renderNewbieForm = this.state.renderNewbieForm
      ? <CreateNewbieForm
        render={this.renderNewbieForm.bind(this)}
      />
      : null

    const mentorButton = this.state.mentorDisplay
      ? <div>
          <p className={styles.messageText}>Hi! Are you a: </p>
          <button className={comboButtonBlue} onClick={this.renderNewbieForm.bind(this)}>New Learner</button>
          <p className={styles.messageText}>or</p>
          <button className={comboButtonBlue} onClick={ signUpUser.bind( this, '/api/users', {role: 'mentor'}) }>Mentor</button>
        </div>
      : null

    return (
      <div className={styles.page}>
        <div className={styles.roleForm}>
          {mentorButton}
          {renderNewbieForm}
        </div>
      </div>
    )
  }
}
