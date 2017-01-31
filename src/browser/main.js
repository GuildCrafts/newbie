import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Dashboard from './components/pages/Dashboard'

class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Dashboard} />
      </Router>
    )
  }
}

render(<Root />, document.getElementById('root'))
