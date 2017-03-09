import React, { Component } from 'react'

export default class DropDown extends Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick a Tag: 
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Test">Grapefruit</option>
              <option value="Test">Grapefruit</option>
              <option value="Test">Grapefruit</option>
              <option value="Test">Grapefruit</option>
              <option value="Test">Grapefruit</option>
              <option value="Test">Grapefruit</option>
            </select>
          </label>
        </form>
      );
    }
  }

  // ReactDOM.render(
  //   <FlavorForm />,
  //   document.getElementById('root')
  // );
