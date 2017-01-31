import React, { Component } from 'react'

export default class StartDateForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      startDate: null
    }
    // this.formSubmit = this.formSubmit(this)
  }

  formSubmit(){
    fetch('/users/noob', {
      method: 'get',
      body: JSON.stringify({ startDate: this.state.startDate })
    })
  }

  handleTextInput(event){
    console.log(event)
    this.setState({startDate: event.target.value})
    console.log(this.state)
  }

  render(){
    return <div className="StartDateForm">
      <form onSubmit={this.formSubmit}>
        <label>What is your LG start date?</label>
        <input onChange={(event) => this.handleTextInput(event)} type="text" name="start_date"/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  }
}
