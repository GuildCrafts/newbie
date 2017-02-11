import React, { Component } from 'react'
import InputField from '../../atoms/InputField'
import styles from './index.css'

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

  submitEdits(){

  }

  render() {
    const task = this.props.task
    let comboButton = 'btn btn-default btn-sm ' + styles.button
    // let comboContainer = 'container ' + styles.listitem

    const taskTitle = this.state.editmode
      ? <InputField value={task.title} />
      : <p className={styles.text}>{task.title}</p>

    const taskDescription = this.state.editmode
      ? <InputField value={task.description} />
      : <p className={styles.text}>{task.description}</p>

    const taskDaysToComplete = this.state.editmode
      ? <InputField value={task.days_to_complete} />
      : <p className={styles.text}>{task.days_to_complete}</p>

    return (
      <div className='container'>
        <div className='col-md-2'>{taskTitle}</div>
        <div className='col-md-5'>{taskDescription}</div>
        <div className='col-md-1'>{taskDaysToComplete}</div>
        <div className='col-md-4'>
          <button type="button" className={comboButton}
            aria-label="Left Align" onClick={this.props.deleteTaskCallback.bind(this, task)}>
            Delete
          </button>
          <button type="button" className={comboButton}
            aria-label="Left Align" onClick={this.enableEditMode.bind(this)}>
            Edit
          </button>
          <button type="button" className={comboButton}
            aria-label="Left Align" onClick={this.submitEdits.bind(this)}>
            Submit
          </button>
          <div className='col-md-3'></div>
        </div>
        <div className={styles.bottomborder}></div>
      </div>
    )
  }
}
