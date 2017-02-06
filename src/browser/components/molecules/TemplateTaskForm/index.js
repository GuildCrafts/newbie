import React, { Component } from 'react'
import InputField from '../../atoms/InputField'
import Button from '../../atoms/Button'

export default class TemplateTaskForm extends Component{

  render() {
    return(
      <div className='row justify-content-md-center'>
        <form className='form-inline' onSubmit={this.props.submit.bind(this)}>
          <label>
            <InputField label='name' name='name' update={this.props.update.bind(this)} />
          </label>
          <label>
            <InputField label='body' name='body' update={this.props.update.bind(this)}/>
          </label>
          <label>
            <InputField label='Days To Complete' name='days_to_complete' update={this.props.update.bind(this)}/>
          </label>
        <button type='submit' className='btn btn-primary btn-sm'>Submit</button>
        <Button
          onClickEvent={this.props.exitForm.bind(this)}
          className='btn btn-secondary' text='exit'/>
      </form>
    </div>
    )
  }
}
