import React, { Component } from 'react'
// import Tag, { getTag } from '../pages/Tag/index'

export default class DropDown extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: []
      };

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
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
        data.json().then( json => {
          this.setState({value: json})
        })
      })
      .catch( err => {
        console.log('Error loading tags', err);
        return err
      })
    }

    componentWillMount() {
      this.fetchTags()
    }

    render() {
      const tagArr = this.state.value
      const tagName = tagArr.map((tagObj, index) =>
        <option key={index} value={tagObj.name}>{tagObj.name}</option>
      )

      return (
        <label>
          Pick a Tag:
          <select value={tagName} onChange={this.handleChange}>
            {tagName}
          </select>
        </label>
      );
    }
  }
