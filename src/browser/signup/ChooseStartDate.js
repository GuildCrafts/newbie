import React, { Component } from 'react'
import moment from 'moment'
import DayPicker from 'react-day-picker'
// import styles from './choose-start-date.css'
// import './choose-start-date.css'

export default class ChooseStartDate extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  toggleStartDate = () =>
    this.setState({ calendar: !this.state.calendar })

  state = {
    // The default selected day is today
    selectedDay: new Date(),
  };

  handleDayClick(e, day) {
    this.setState({ selectedDay: day });
  }

  render() {
    const calendar = this.state.calendar ?
        <DayPicker className={styles.daypicker} onDayClick={ this.handleDayClick } /> :
      null
    
    return (
      <div>
        <button onClick={this.toggleStartDate}>Choose your start date</button>
        {calendar}
        <div onClick={() => this.props.signUp('noob')}>Submit</div>
      </div>
    )

  }
}
