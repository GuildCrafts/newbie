import React, { Component } from 'react'
import Layout from '../../molecules/Layout/index'
import styles from './index.css'


export default class Task extends Component {
  constructor(props) {
    super(props)

  }

  render () {
    return (
      <div className={styles.TaskDiv}> {this.props.body}</div>
    )
  }
}
