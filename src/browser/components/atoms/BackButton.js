import React, { Component } from 'react'
import styles from './back-button.css'

export default class BackButton extends Component{
  constructor() {
    super()
    this.props = {
      
    }
  }

  render() {
    return(
      <div className={styles.back}>
        Back
      </div>
    )
  }
}
