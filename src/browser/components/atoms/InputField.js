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
      <div className='form-group'>
        <label> {label} </label>
        <input
          type='txt'
          className='form-control'
          name={`template_task_${name}`}
          value= {this.state.inputValue}
          placeholder={name}
          onChange={this.handleInputChange.bind(this, event, inputField)}
          >
        </input>
      </div>
    )
  }
}
