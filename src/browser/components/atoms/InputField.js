import React, { Component } from 'react'

export default class InputField extends Component {

  render () {
    const { label, name, defaultValue } = this.props
    return (
      <div className='form-group'>
        <label> {label} </label>
        <input
          type='text'
          className='form-control'
          defaultValue={defaultValue}
          name={name}
          onChange={this.props.onChange.bind(this)}
          >
        </input>
      </div>
    )
  }
}
