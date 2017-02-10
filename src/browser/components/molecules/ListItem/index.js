import React, { Component } from 'react'
import InputField from '../../atoms/InputField'

export default class ListItem extends Component {

  constructor(props){
    super(props)
    this.state = {
      editmode: false
    }
  }

  enableEditMode(){
    this.setState({ editmode: !this.state.editmode })
  }

  render() {
    const task = this.props.task

    const taskTitle = this.state.editmode
      ? <InputField value={task.title} />
      : task.title

    const taskDescription = this.state.editmode
      ? <InputField value={task.description} />
      : task.description

    const taskDaysToComplete = this.state.editmode
      ? <InputField value={task.days_to_complete} />
      : task.days_to_complete

    return (
      <div>
        <div>{taskTitle}</div>
        <div>{taskDescription}</div>
        <div>{taskDaysToComplete}</div>
        <div>
          <button type="button" className="btn btn-default"
            aria-label="Left Align" onClick={this.props.deleteTaskCallback.bind(this, task)}>
            Delete
          </button>
          <button type="button" className="btn btn-default"
            aria-label="Left Align" onClick={this.enableEditMode.bind(this)}>
            Edit
          </button>
        </div>
      </div>
    )
  }
}
