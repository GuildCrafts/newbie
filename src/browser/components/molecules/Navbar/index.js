import React, { Component } from 'react'
import styles from './index.css'
 import UserImage from '../../atoms/Userimage/userimage'

export default class Navbar extends Component {
  render() {
    const {user} = this.props

    return <div className={styles.Navbar}>
             Newbie
             <UserImage user={user} />
            </div>
  }
}
