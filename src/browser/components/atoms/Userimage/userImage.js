import React, { Component } from 'react'
import styles from './userimage.css'
export default class UserImage extends Component{
  render() {
    return (
      <div>
      <img className='user-image' src='http://placehold.it/50x50&text=slide1' />
      </div>
    )
  }
}
