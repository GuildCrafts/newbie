import React, { Component } from "react"
import styles from './list.css'
import ListItem from './ListItem/index'


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
          { (this.props.currentTemplateTasks || []).map((task, index) =>
              <ListItem key={index} task={task} {...this.props} />
          )}
        </tbody>
      </table>
    )
  }
}
