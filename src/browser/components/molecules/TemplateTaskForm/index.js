import React, { Component } from 'react'
import InputField from '../../atoms/InputField'
import Button from '../../atoms/Button'

export default class TemplateTaskForm extends Component{

  render() {
    return(
      <div>
        <form onSubmit={(event)=>this.props.submit(event)}>
          <label>
            <InputField label='name' name='name' update={(event, inputField)=>this.props.update(event, inputField)} />
          </label>
          <label>
            <InputField label='body' name='body' update={(event, inputField)=>this.props.update(event, inputField)}/>
          </label>
          <label>
            <InputField label='Days To Complete' name='days_to_complete' update={(event, inputField)=>this.props.update(event, inputField)}/>
          </label>
        <input type='submit' value='Add Task' ></input>
      </form>
      <Button onClickEvent={(event)=>this.props.exitForm(event)} text='exit'/>
    </div>
    )
  }
}
