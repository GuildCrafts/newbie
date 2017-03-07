import React, { Component } from 'react'
import styles from './index.css'

export default class Layout extends Component {

  render() {
    return <div className='container'>
      <div></div>
      <div className='layout-content'>
        {this.props.children}
      </div>
      <div className={styles.layoutFooter}>
        <a href='https://github.com/GuildCrafts/newbie/issues'>Add an issue on GitHub</a>
      </div>
    </div>
  }
}
