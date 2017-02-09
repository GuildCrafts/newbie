import React, { Component } from 'react'

export default class InputField extends Component {

  render () {
    const { label, name } = this.props
    return (
      <div className='form-group'>
        <label> {label} </label>
        <input
          type='text'
          className='form-control'
          name={name}
          onChange={this.props.onChange.bind(this)}
          >
        </input>
      </div>
    )
  }
}
