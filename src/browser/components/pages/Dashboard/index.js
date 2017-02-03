import React, { Component } from 'react'
import Layout from '../../molecules/Layout/index'
import NoobDashboard from '../NoobDashboard/index'
import MentorDashboard from '../MentorDashboard/index'
import styles from './index.css';

export default class Dashboard extends Component {

  render () {
    return (
        <Layout>
          <div className={styles.red}>Dashboard</div>
          <MentorDashboard />
        </Layout>
    )
  }
}
