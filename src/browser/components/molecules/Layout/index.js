import React, { Component } from 'react'

export default class Layout extends Component {
  render() {
    return <div className='container'>
      <div></div>
      <div className='layout-content'>
        {this.props.children}
      </div>
    </div>
  }
}
