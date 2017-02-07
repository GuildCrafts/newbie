import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
<<<<<<< HEAD
import Dashboard from './components/pages/Dashboard/index'
import TemplateTask from './components/pages/TemplateTask/index'
=======
import Signup from './components/pages/Signup/index'
import Dashboard from './components/pages/Dashboard'
>>>>>>> fixing issues with Signup page config

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
