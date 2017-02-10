import React, { Component } from 'react'

export default class Button extends Component{
  render() {
    return(
      <button onClick={this.props.onClickEvent} className='btn btn-primary btn-md'>
        {this.props.text}
      </button>
    )
  }
}
