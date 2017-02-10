import React, { Component } from 'react'
import { signUpUser } from '../../../common/requests'
import CreateNewbieForm from '../../molecules/CreateNewbieForm/index'
import styles from './index.css'

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updateNewbieFormState: false,
      mentorDisplay: true
    }
  }

  updateNewbieFormState() {
    this.setState({
      updateNewbieFormState: !this.state.updateNewbieFormState,
      mentorDisplay: !this.state.mentorDisplay
    })
  }

  render() {
    let comboButtonBlue = 'btn btn-primary btn-lg ' + styles.customBtnBlue

    const updateNewbieFormState = this.state.updateNewbieFormState
      ? <CreateNewbieForm
        render={this.updateNewbieFormState.bind(this)}
      />
      : null

    const mentorButton = this.state.mentorDisplay
      ? <div>
          <p className={styles.messageText}>Hi! Are you a: </p>
          <button className={comboButtonBlue} onClick={this.updateNewbieFormState.bind(this)}>New Learner</button>
          <p className={styles.messageText}>or</p>
          <button className={comboButtonBlue} onClick={ signUpUser.bind( this, '/api/users', {role: 'mentor'}) }>Mentor</button>
        </div>
      : null

    return (
      <div className={styles.page}>
        <div className={styles.roleForm}>
          {mentorButton}
          {updateNewbieFormState}
        </div>
      </div>
    )
  }
}
