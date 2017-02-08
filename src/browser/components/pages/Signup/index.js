import React, { Component } from 'react'
import CreateNewbieForm from '../../molecules/CreateNewbieForm/index'
import styles from './index.css'

export default class Signup extends Component {
  constructor() {
    super()
    this.state = {
      renderNewbieForm: false
    }
  }

  renderNewbieForm() {
    this.setState({ renderNewbieForm: !this.state.renderNewbieForm })
  }

  signUpRole(role) {
    console.log(`Signing up new ${role}!`)
  }

  render() {
    const renderNewbieForm = this.state.renderNewbieForm
      ? <CreateNewbieForm />
      : null

    return (
        <div className={styles.roleForm}>
        <div>Hi! Are you a: </div>
        <button className='btn' onClick={this.renderNewbieForm.bind(this)}>New Learner</button>
        <div>or</div>
        <button className={styles.btn} onClick={() => this.signUpRole('mentor')}>Mentor</button>
        {renderNewbieForm}
      </div>
    )
  }
}
