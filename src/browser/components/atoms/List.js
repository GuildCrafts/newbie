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

  render() {
    return(
      <div className='container'>
        <div className={styles.row}>
          <div className='col-md-2'>
            <h4>Title</h4>
          </div>
          <div className='col-md-5'>
            <h4 className={styles.tableDescription}>Description</h4>
          </div>
          <div className='col-md-3'>
            <h4 className={styles.tableDays}>Days to Complete</h4>
          </div>
          <div className='col-md-2'></div>
        </div>
        <div className={styles.tableWhiteSpace}>
          <div>
          {(this.props.currentTemplateTasks || []).map((task) =>
            <div key={task.id}>
              <ListItem
                task={task}
                deleteTaskCallback={this.props.deleteTaskCallback}
              />
            </div>
          )}
        </div>
        </div>
      </div>
    )
  }
}
