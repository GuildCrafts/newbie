import React, { Component } from 'react'
import moment from 'moment'
import DayPicker, { DateUtils } from 'react-day-picker'
import styles from './index.css'

export default class CreateNewbie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pickStartDate: false,
      selectedDay: new Date()
    }
  }

  hideShowCalendar() {
    this.setState({ pickStartDate: !this.state.pickStartDate })
  }

  isDaySelected(day) {
    return DateUtils.isSameDay(day, this.state.selectedDay)
  }

  handleDayClick(event, day) {
    this.setState({ selectedDay: day })
  }

  render() {
    const pickStartDate = this.state.pickStartDate
      ? <DayPicker
          onDayClick={this.handleDayClick.bind(this)}
          selectedDays={ this.isDaySelected.bind(this) }
        />
      : null

    return (
      <div className={styles.formfield}>
        <button onClick={this.hideShowCalendar.bind(this)}>What is your start date?</button>
        {pickStartDate}
        <p>
          The selected day is: { this.state.selectedDay.toLocaleDateString() }
        </p>
        <button onClick={() => this.props.signUp('noob')}>Submit</button>
      </div>
    )

  }
}
