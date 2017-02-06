import React, { Component } from 'react'
import Layout from '../../molecules/Layout/index'
import NoobDashboard from '../NoobDashboard/index'
import MentorDashboard from '../MentorDashboard/index'
import styles from './index.css';

export default class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {role: null}
    }
  }

  componentDidMount(){
    this.fetchUser()
  }

  fetchUser(){
    const options = {
      method: 'GET',
      mode: 'cors',
      headers: new Headers({
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json',
         }),
      credentials: 'same-origin'
    }
    fetch('/api/user', options)
    .then( user => {
      return user.json()
    })
    .then( userjson => {
      this.setState({
        user: userjson
      })
    })
    .catch( err => {
      console.log('Error loading user', err);
      return err
    })
  }

  render () {

    const dashes = {
      noob:   <NoobDashboard />,
      mentor: <MentorDashboard />
    }

    const userDash = dashes[this.state.user.role] || null

    return (
        <Layout>
          <div className={styles.red}>Dashboard</div>
          {userDash}
        </Layout>
    )
  }
}
