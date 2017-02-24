import React, { Component } from "react"
import styles from './list.css'
export default class List extends Component{

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
              <ListItem task={task} {...this.props} />
          )}
        </tbody>
      </table>
    )
  }
}
