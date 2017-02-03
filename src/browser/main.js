import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Signup from './signup/Signup'
import Dashboard from './components/pages/Dashboard'

class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/signup' component={Signup} />
      </Router>
    )
  }
}

render(<Root />, document.getElementById('root'))
