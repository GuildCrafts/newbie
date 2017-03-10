import React, { Component } from 'react'
// import Tag, { getTag } from '../pages/Tag/index'

export default class DropDown extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

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

    render() {
      this.fetchTags()
      // <form >
      //   <label>
      //     Pick a Tag:
      //     <select value={tagMap} onChange={this.handleChange}>
      //       <option value={tagMap}>{tagMap}</option>
      //     </select>
      //   </label>
      // </form>
      return (
        <pre>{JSON.stringify(this.state.value)}</pre>
      );
    }
  }
