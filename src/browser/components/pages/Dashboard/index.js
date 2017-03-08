import React, { Component } from 'react'
import Layout from '../../molecules/Layout/index'
import styles from './index.css'
import GenericDashboard from '../GenericDashboard/index'
import MentorDashboard from '../MentorDashboard/index'
import NewbieDashboard from '../NewbieDashboard/index'
import TemplateTask from '../TemplateTask/index'
import {Link, browserHistory} from 'react-router'

export default class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const options = {
      method: 'GET',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      credentials: 'same-origin'
    }
    fetch('/api/users/current_user', options)
      .then( response => {
        return response.json()
      })
      .then( user => {
        this.setState({user: user})
      });
  }

  chooseDashboardJSX(user){
    if (!user) {
      return null
    }
    console.log('role', user && user.role);
    if(user.role === 'admin') {
      return (<div>
                <h3>Admin Dashboard</h3>
                <Link to={'/overdue_tasks'} > Overdue Tasks </Link>
                <TemplateTask />
              </div>)
    } else if (user.role === 'mentor') {
      return <MentorDashboard />
    } else if (user.role === 'noob') {
      return <NewbieDashboard />
    } else {
      browserHistory.push('/signup')
    }
  }

  render () {
    console.log('state:', this.state)
    return (
        <Layout>
          {this.chooseDashboardJSX(this.state.user)}
        </Layout>
    )
  }
}
