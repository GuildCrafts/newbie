import React, { Component } from "react"
import styles from './list.css'
export default class List extends Component{

  render() {
    return(
      <div>
        <div className={styles.templateTaskListContainer}>
          { this.props.currentTemplateTasks.map((task) =>
            <div key={task.id} className={styles.templateTaskWrapper}>
              <span className={styles.templateTaskName}>{task.name}</span>
              <span className={styles.templateTaskBody}>{task.body} </span>
              <span className={styles.templateTaskDaysToComp}>{task.days_to_complete}</span>
            </div>
          )}
          </div>
      </div>
    )
  }
}
