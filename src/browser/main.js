import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import TemplateTask from './components/pages/TemplateTask/index'
import Tag from './components/pages/Tag/index'
import Signup from './components/pages/Signup/index'
import Dashboard from './components/pages/Dashboard'

class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/signup' component={Signup} />
        <Route path='/template_tasks' component={TemplateTask}/>
        <Route path='/tags' component={Tag}/>
      </Router>
    )
  }
}

render(<Root />, document.getElementById('root'))
