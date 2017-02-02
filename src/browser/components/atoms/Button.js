import React, { Component } from 'react'

export default class Button extends Component{
  render() {
    return(
      <button onClick={this.props.onClickEvent}>
        {this.props.text}
      </button>
    )
  }
}
