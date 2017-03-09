import React, { Component } from "react"
import styles from './list.css'
import TagListItem from './TagListItem/index'


export default class TagList extends Component{

  render() {
    var tagMap = (this.props.currentTags || []).map((tag) =>
        <TagListItem tag={tag} {...this.props} />
    )
    return(
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody className={styles.tableWhiteSpace}>
          {tagMap}
        </tbody>
      </table>
    )
  }
}
