import React, { Component } from 'react'
import InputField from '../../atoms/InputField'
import TextArea from '../../atoms/TextArea/index'
import Button from '../../atoms/Button'

export default class TagForm extends Component{

  constructor(props){
    super(props)
    this.state = {user_role: props.userRole}
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  render() {
    const task = this.props.task || {}
    return(
      <div className='form-group'>
        <form className='' onSubmit={this.props.onSubmit.bind(this, this.state)}>
          <div className='form-group'>
          <InputField label='Label' name='label' onChange={this.handleInputChange} />
          </div>
          <button type='submit' className='btn btn-primary btn-sm'>Submit</button>
          <a className='btn btn-secondary btn-sm'
          onClick={this.props.exitForm.bind(this)} href="#">Cancel</a>
        </form>
      </div>
    )
  }
}
