import React, { Component } from 'react'
import moment from 'moment'
import DayPicker, { DateUtils } from 'react-day-picker'
import styles from './index.css'

export default class CreateNewbie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pickStartDate: false,
      selectedDay: new Date(),
      buttonDisplay: true,
      dayConfirmationDisplay: false,
    }
  }

  signUpUser(role) {
    console.log(`Signing up new ${role}!`)
  }

  hideShowCalendar(wentBack) {
    this.setState({
      pickStartDate: !this.state.pickStartDate,
      buttonDisplay: !this.state.buttonDisplay
     })
  }

  handleDayClick(event, day) {
    this.setState({
      pickStartDate: !this.state.pickStartDate,
      electedDay: day,
      selectedDay: day,
      dayConfirmationDisplay: !this.state.dayConfirmationDisplay,
     })
  }

  isDaySelected(day) {
    return DateUtils.isSameDay(day, this.state.selectedDay)
  }

  render() {
    let comboButtonBlue = 'btn btn-primary btn-lg ' + styles.customBtnBlue
    let comboButtonBlueLow = 'btn btn-primary btn-lg ' + styles.customBtnBlueLow

    const pickStartDate = this.state.pickStartDate
      ? <DayPicker
          onDayClick={this.handleDayClick.bind(this)}
          selectedDays={this.isDaySelected.bind(this)}
        />
      : null

    const hideShowButton = this.state.buttonDisplay
      ? <button
          className={comboButtonBlueLow}
          onClick={this.hideShowCalendar.bind(this)}>
          What is your start date?
        </button>
      : null

    const selectedDayConfirmation = this.state.dayConfirmationDisplay
      ? <div>
        <p className={styles.selectedDayText}>
          Selected day { this.state.selectedDay.toLocaleDateString() }
        </p>
        <button
          className={comboButtonBlue}
          onClick={this.signUpUser.bind()}>
          Submit
        </button>
        </div>
      : null

    return (
      <div>
        <div className={styles.linkBack}>
          <a href='/signup'>Back</a>
        </div>
        <div className={styles.formfield}>
          {hideShowButton}
          {pickStartDate}
          {selectedDayConfirmation}
        </div>
      </div>
    )
  }
}
