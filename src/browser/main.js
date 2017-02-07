import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Dashboard from './components/pages/Dashboard/index'
import TemplateTask from './components/pages/TemplateTask/index'

class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/template_tasks' component={TemplateTask}/>
      </Router>
    )
  }
}

render(<Root />, document.getElementById('root'))
