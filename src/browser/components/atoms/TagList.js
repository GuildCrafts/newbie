import React, { Component } from "react"
import styles from './list.css'
import ListItem from './ListItem/index'


export default class TagList extends Component{

  render() {
    return(
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody className={styles.tableWhiteSpace}>
          { (this.props.currentTags || []).map((tag) =>
              <ListItem tag={tag} {...this.props} />
          )}
        </tbody>
      </table>
    )
  }
}
