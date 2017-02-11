import React, { Component } from "react"
import styles from './list.css'

export default class List extends Component {

  constructor(props){
    super(props)
    this.state = {
      editmode: false
    }
  }

  toggleEditMode(){
    this.setState({ editmode: !this.state.editmode })
  }


  render() {
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
        { (this.props.currentTemplateTasks || []).map((task) =>
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
                aria-label="Left Align" onClick={this.toggleEditMode.bind(this)}>
                Edit
              </button>
            </td>
          </tr>
        )}
        </tbody>
      </table>
    )
  }
}
