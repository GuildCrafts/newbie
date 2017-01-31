import React, { Component } from 'react'

export default class Layout extends Component {
  render() {
    return <div>
      <div>This should be the navbar</div>
      <div className='layout-content'>
        {this.props.children}
      </div>
    </div>
  }
}
