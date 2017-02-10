import React, { Component } from 'react'

export default class InputField extends Component {

  constructor(props){
    super(props)
  }

  render () {
    return (
      <div className='form-group'>
        <label> {this.props.label} </label>
        <input
          type='text'
          className='form-control'
          name={this.props.name}
          // onChange={this.props.onChange.bind(this)}
          value={this.props.value}
          >
        </input>
      </div>
    )
  }
}
