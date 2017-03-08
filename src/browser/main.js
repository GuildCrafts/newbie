import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import TemplateTask from './components/pages/TemplateTask/index'
import Signup from './components/pages/Signup/index'
import Dashboard from './components/pages/Dashboard'
import OverdueTask from './components/pages/OverdueTask'

class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/signup' component={Signup} />
        <Route path='/overdue_tasks' component={OverdueTask} />
        <Route path='/template_tasks' component={TemplateTask}/>
      </Router>
    )
  }
}

render(<Root />, document.getElementById('root'))
