import React, { Component } from 'react'
import Layout from '../../molecules/Layout/index'
import styles from './index.css'
const moment = require('moment')
const utils = require( '../../../common/utils.js')

export default class Tag extends Component {
  constructor(props) {
    super(props)
    this.state = {
      complete: false
    }
  }

  isCompleteHandler( event ){
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json',
         }),
      credentials: 'same-origin',
      body: JSON.stringify({is_complete: true})
    }
    fetch( `/api/tag/${this.props.tag.id}`, options )
    .then( tagPromise => {
      return tagPromise.json()
    })
    .then( tag => {
      this.props.fetchTags()
    })
    .catch(err => {
      console.log('Error marking tag complete', err);
      return err
    })
  }

  render () {
    let tag = this.props.tag

    let listClass = this.props.isComplete ?
        'list-group-item list-group-item-success'
        : 'list-group-item list-group-item';

    return (
        <div className={listClass}>
          <div> <b>{tag.name}</b>
          </div>
        </div>
    )
  }
}
