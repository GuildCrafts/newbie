import React, { Component } from 'react'

export default class InputField extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: ''
    }
  }

  handleInputChange(event, name){
    this.setState({
      inputValue: event.target.value
    })
    this.props.update(event, name)
  }
  render () {
    const { label, isClicked, name, update } = this.props
    const inputField = {name}.name
    return (
      <span className='form-input'>
        <label> {label} </label>
        <input
          type='text'
          name={`template_task_${name}`}
          value= {this.state.inputValue}
          className='form-field'
          placeholder={name}
          onChange={(event)=> this.handleInputChange(event, inputField)}
          >
        </input>
      </span>
    )
  }
}
