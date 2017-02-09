import React, { Component } from 'react'
import styles from './back-button.css'

export default class BackButton extends Component{
  constructor(props) {
    super(props)
    // this.props = {
    //
    // }
  }

  middleware(func, length){
    console.log("I'm logging:", this.props.clickFunc[this.props.passedLength], this.props.passedLength)
    this.props.backClick(this.props.clickFunc[this.props.passedLength])
  }

  render() {
    return(
      <div className={styles.back} onClick={this.middleware.bind(this)}>
        Back
      </div>
    )
  }
}
