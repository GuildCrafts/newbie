import React, { Component } from 'react'
import InputField from '../../atoms/InputField'
import TextArea from '../../atoms/TextArea/index'
import Button from '../../atoms/Button'
import DropDown from '../../atoms/drop-down'

export default class TemplateTaskForm extends Component{

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
    console.log("Tasks ===", this.props)
    const task = this.props.task || {}
    return(
      <div className='form-group'>
        <form className='' onSubmit={this.props.onSubmit.bind(this, this.state)}>
          <div className='form-group'>
          <InputField name='Title' name='title' defaultValue={task.title} onChange={this.handleInputChange} />
          </div>
          <TextArea name='Description' name='description' defaultValue={task.description} onChange={this.handleInputChange} inputType='textarea'/>
          <InputField name='Days To Complete' name='days_to_complete' defaultValue={task.days_to_complete} onChange={this.handleInputChange}/>
          <DropDown />
          <button type='submit' className='btn btn-primary btn-sm'>Submit</button>
          <a className='btn btn-secondary btn-sm'
          onClick={this.props.exitForm.bind(this)} href="#">Cancel</a>
      </form>
    </div>
    )
  }
}
