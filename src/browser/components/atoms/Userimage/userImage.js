import React, { Component } from 'react'
import styles from './userimage.css'
import md5 from 'md5'

export default class UserImage extends Component {
  emailHash(){

    if(this.props.user !== undefined) {
      return md5(this.props.user.email)
    } else {
      return ''
    }
  }

  render() {
    return (
      <img className='user-image' src={`https://gravatar.com/avatar/${this.emailHash()}`} />
    )
  }
}
