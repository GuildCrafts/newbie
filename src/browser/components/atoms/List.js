import React, { Component } from "react"
import styles from './list.css'
import InputField from './InputField'
import ListItem from '../molecules/ListItem/index'

export default class List extends Component{
  constructor(props){
    super(props)
    this.state = {
      editmode: false
    }
  }

  // getIndividualTask(){
  //   if(this.state.editmode){
  //     return (this.props.currentTemplateTasks || []).map((task) =>
  //       <tr key={task.id}>
  //         <td><InputField value={task.title} /></td>
  //         <td><InputField value={task.description} /></td>
  //         <td><InputField value={task.days_to_complete} /></td>
  //         <td>
  //           <button type="button" className="btn btn-default"
  //             aria-label="Left Align" onClick={this.props.deleteTaskCallback.bind(this, task)}>
  //             Delete
  //           </button>
  //           <button type="button" className="btn btn-default"
  //             aria-label="Left Align" onClick={this.enableEditMode.bind(this)}>
  //             Edit
  //           </button>
  //         </td>
  //       </tr>
  //     )
  //   } else {
  //     return (this.props.currentTemplateTasks || []).map((task) =>
  //       <tr key={task.id}>
  //         <td>{task.title}</td>
  //         <td>{task.description}</td>
  //         <td>{task.days_to_complete}</td>
  //         <td>
  //           <button type="button" className="btn btn-default"
  //             aria-label="Left Align" onClick={this.props.deleteTaskCallback.bind(this, task)}>
  //             Delete
  //           </button>
  //           <button type="button" className="btn btn-default"
  //             aria-label="Left Align" onClick={this.enableEditMode.bind(this)}>
  //             Edit
  //           </button>
  //         </td>
  //       </tr>
  //     )
  //   }
  // }

  render() {
    // const value = this.getIndividualTask()
    return(
      <div className='table'>
        <div className={styles.headers}>
          <div className={styles.headerItem}>Title</div>
          <div className={styles.headerItem}>Description</div>
          <div className={styles.headerItem}>Days to Complete</div>
        </div>
        <div className={styles.tableWhiteSpace}>
          {(this.props.currentTemplateTasks || []).map((task) =>
            <div key={task.id} className={styles.task}>
              <ListItem
                task={task}
                deleteTaskCallback={this.props.deleteTaskCallback}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}
