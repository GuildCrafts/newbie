import React, { Component } from 'react'
import moment from 'moment'
import DayPicker, { DateUtils } from 'react-day-picker'
import BackButton from '../../atoms/BackButton'
import styles from './index.css'

export default class CreateNewbie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pickStartDate: false,
      selectedDay: new Date(),
      buttonDisplay: true,
      dayConfirmationDisplay: false,
      backFunction: [ this.props.render ],
      backIndex: 0
    }

    this.backClick = this.backClick.bind(this)
    this.hideShowCalendar = this.hideShowCalendar.bind(this)
    this.handleDayClick = this.handleDayClick.bind(this)
  }

  backClick = callback => {
    let tempArray = this.state.backFunction.slice(0)
    tempArray.pop()
    this.setState({
      backFunction: tempArray,
      backIndex: this.state.backIndex-1
    })
    callback(true)
  }

  hideShowCalendar(wentBack) {
    this.setState({
      pickStartDate: !this.state.pickStartDate,
      buttonDisplay: !this.state.buttonDisplay,
      backFunction: tempArray
     })

    if(!wentBack){
      let tempArray = this.state.backFunction.slice()
      tempArray.push( this.hideShowCalendar )
      this.setState({ backIndex: this.state.backIndex+1 })
    }
  }

  handleDayClick(event, day) {
    this.setState({
      pickStartDate: !this.state.pickStartDate,
      electedDay: day,
      selectedDay: day,
      dayConfirmationDisplay: !this.state.dayConfirmationDisplay
    })

    let tempArray = this.state.backFunction.slice()
    tempArray.push( this.handleDayClick )
    this.setState({
      backFunction: tempArray,
      backIndex: this.state.backIndex+1
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
          selectedDays={ this.isDaySelected.bind(this) }
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
            onClick={() => this.props.signUp('noob')}>
            Submit
          </button>
        </div>
      : null

    return (
      <div>
          <div className={styles.buttonBack}>
            <BackButton
              backClick={this.backClick}
              clickFunc={this.state.backFunction}
              passedLength={this.state.backIndex}
            />
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
