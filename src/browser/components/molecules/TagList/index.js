import React, { Component } from 'react'
import Layout from '../../molecules/Layout/index'
import Tag from '../Tag/index'
import styles from './index.css';
const moment = require('moment')
const _ = require('lodash')

export default class TagList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tags: []
    }
  }

  componentDidMount(){
    this.fetchTags()
  }

  fetchTags(){
    const options = {
      method: 'GET',
      mode: 'cors',
      headers: new Headers({
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json',
         }),
      credentials: 'same-origin'
    }
    fetch('/api/tag', options)
    .then( data => {
      return data.json()
    })
    .then( result => {
      this.setState({
        tags: result.sort((a,b) => moment(a.due_date).isAfter(b.due_date) )
      })
    })
    .catch( err => {
      console.log('Error loading tags', err);
      return err
    })
  }

  buildTagsJSX (tags){
    return tags.map( tag =>
      <Tag
        key={tag.id}
        tag={tag}
        fetchTags={this.fetchTags.bind(this)}/>)
  }

  renderTagsPanel(tags, options) {
    const tagsJSX = tags.length ? this.buildTagsJSX(tags)
                     : <div className='well'>{options.noTagsMsg}</div>
    return (
      <div className='panel panel-info'>
        <div className='panel-heading'>
          <div className='panel-title'>{options.name}</div>
        </div>
        <div className='panel-body'>
          <div className='list-group'>{tagsJSX}</div>
        </div>
      </div>
    );
  }

  render() {
    const tagsGroupedByComplete = _.groupBy(this.state.tags, (tag) => tag.is_complete)
    const inProgressTags = tagsGroupedByComplete.false || []
    const completedTags = tagsGroupedByComplete.true || []

    return (
      <div className=''>
        {this.renderTagsPanel(inProgressTags, false, {title: 'Tags Due', noTagsMsg: 'No tags due!'})}
        <br/>
        {this.renderTagsPanel(completedTags, true, {title: 'Tags Completed', noTagsMsg: 'No completed tags.'})}
      </div>
    )
  }
}
