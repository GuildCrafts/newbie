import React, { Component } from 'react'
import Layout from '../../molecules/Layout/index'
import Task from '../Task/index'
import styles from './index.css';


export default class TaskList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  componentWillMount(){
    const fetchDetails = {
      method: 'GET',
      mode: 'cors',
      headers: new Headers({
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json',
         }),
      credentials: 'same-origin'
    }
    fetch('http://noob.learnersguild.dev/api/task', fetchDetails)
    .then( data => {
      return data.json()
    })
    .then( result => {
      this.setState({
        tasks: result
      })
    })
  }

  render() {
    const displayTasks = []
    for (let i of this.state.tasks){
      displayTasks.push(<Task key={i.id} body={i.body} is_complete={i.is_complete}/>)
    }

    return (
      <div className={styles.TaskList}>
        {displayTasks}
      </div>
    )
  }
}
