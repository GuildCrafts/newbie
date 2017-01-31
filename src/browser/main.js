import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import LandingPage from './LandingPage'

class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={LandingPage} />
      </Router>
    )

  }
}

render(<Root />, document.getElementById('root'))
