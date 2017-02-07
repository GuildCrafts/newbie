import React, { Component } from 'react'
import moment from 'moment'
import DayPicker from 'react-day-picker'
// import styles from './choose-start-date.css'
// import './choose-start-date.css'

export default class ChooseStartDate extends Component {
  constructor(props) {
    super(props);
  }

  toggleStartDate() {
    this.setState({ calendar: !this.state.calendar })
  }

  handleDayClick(e, day) {
    this.setState({ selectedDay: day });
  }

  render() {
    const calendar = this.state.calendar ?
          <DayPicker className={styles.daypicker} onDayClick={this.handleDayClick.bind(this)} />
          : null

    return (
      <div>
        <button onClick={this.toggleStartDate}>Choose your start date</button>
        {calendar}
        <div onClick={() => this.props.signUp('noob')}>Submit</div>
        </div>
    )

  }
}
