import React, { Component } from 'react'
import TagListItem from './TagListItem/index'

export default class DropDown extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    render() {
      var tagMap = (this.props.currentTags || []).map((tag) =>
      <TagListItem tag={tag} {...this.props} />
    )
      return (
        <form >
          <label>
            Pick a Tag:
            <select value={tagMap} onChange={this.handleChange}>
              <option value={this.props.currentTags}>{this.props.currentTags}</option>
            </select>
          </label>
        </form>
      );
    }
  }
