import React, { Component } from "react"
import styles from './list.css'
import InputField from './InputField'

export default class List extends Component{
  constructor(props){
    super(props)
    this.state = {
      editmode: false
    }
  }

  enableEditMode(){
    this.setState({ editmode: !this.state.editmode })
  }

  getIndividualTask(){
    if(this.state.editmode){
      return (this.props.currentTemplateTasks || []).map((task) =>
        <tr key={task.id}>
          <td><InputField value={task.title} /></td>
          <td><InputField value={task.description} /></td>
          <td><InputField value={task.days_to_complete} /></td>
          <td>
            <button type="button" className="btn btn-default"
              aria-label="Left Align" onClick={this.props.deleteTaskCallback.bind(this, task)}>
              Delete
            </button>
            <button type="button" className="btn btn-default"
              aria-label="Left Align" onClick={this.enableEditMode.bind(this)}>
              Edit
            </button>
          </td>
        </tr>
      )
    } else {
      return (this.props.currentTemplateTasks || []).map((task) =>
        <tr key={task.id}>
          <td>{task.title}</td>
          <td>{task.description}</td>
          <td>{task.days_to_complete}</td>
          <td>
            <button type="button" className="btn btn-default"
              aria-label="Left Align" onClick={this.props.deleteTaskCallback.bind(this, task)}>
              Delete
            </button>
            <button type="button" className="btn btn-default"
              aria-label="Left Align" onClick={this.enableEditMode.bind(this)}>
              Edit
            </button>
          </td>
        </tr>
      )
    }
  }

  render() {
    const value = this.getIndividualTask()
    return(
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Days to Complete</th>
            <th></th>
          </tr>
        </thead>
        <tbody className={styles.tableWhiteSpace}>
        {value}
        </tbody>
      </table>
    )
  }
}
