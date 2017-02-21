import React, { Component } from 'react'
import TemplateTaskForm from '../../molecules/TemplateTaskForm'
import List from '../../atoms/List'
import Button from '../../atoms/Button'
// import styles from './index.css'

export default class TemplateTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showTemplateTaskForNoob: false,
      showTemplateTaskForMentor: false,
      currentTemplateTasks: { noob:[],mentor:[] },
      noobTempTaskFormData: {name:'', desc:'', daysToComplete:''},
      mentorTempTaskFormData: {name:'', desc:'', daysToComplete:''}
    }
    this.addTemplateTask = this.addTemplateTask.bind(this)
    this.deleteTemplateTask = this.deleteTemplateTask.bind(this)
  }

  getTemplateTask() {
    fetch('/api/template_tasks', {
      method: 'get',
      mode: 'cors',
      credentials: 'same-origin'
    }).then( results => {
      return results.json()
    }).then(tasks => {
      this.setState({
        currentTemplateTasks : tasks
      })
    })
  }

  addTemplateTask(templateTask, event){
    event.preventDefault()
    fetch('/api/template_tasks', {
      method: 'post',
      mode: 'cors',
      credentials: 'same-origin',
      body: JSON.stringify(templateTask),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }).then(res => {
      this.getTemplateTask()
      this.setState({
        showTemplateTaskForNoob: false,
        showTemplateTaskForMentor: false
      })
    })
  }

  deleteTemplateTask(task) {
    const confirmed = confirm('Are you sure you want to delete this?');
    if(confirmed) {
      fetch('/api/template_tasks/' + task.id, {
        method: 'delete',
        mode: 'cors',
        credentials: 'same-origin'
      }).then( results => {
        return results.json();
      }).then (res => {
        this.getTemplateTask()
        // add notification here
        console.log(res);
      });
    };
  }

  toggleTempTaskNoobForm() {
    this.setState({
      showTemplateTaskForNoob: !this.state.showTemplateTaskForNoob
    })
  }

  toggleTempTaskMentorForm() {
    this.setState({
      showTemplateTaskForMentor: !this.state.showTemplateTaskForMentor
    })
  }

  componentWillMount(){
    this.getTemplateTask()
  }

  renderTemplateTasks(tasks, options){
    const templateTaskFormJSX = this.addButtonOrForm(options.showForm, options.toggleFn, options.userRole)
    return (
      <div className='panel panel-info'>
        <div className='panel-heading'>{options.heading}</div>
        <div className='panel-body'>
          <List currentTemplateTasks={tasks} userRole={options.userRole}
            toggleFn={options.toggleFn} deleteTaskCallback={this.deleteTemplateTask}/>
        </div>
        {templateTaskFormJSX}
      </div>
    )
  }

  addButtonOrForm(showForm, toggleFn, userRole) {
    return showForm ?
          <TemplateTaskForm
            userRole={userRole}
            update={(event, inputField) => this.handleTempTaskFormFields(event, inputField)}
            onSubmit={this.addTemplateTask}
            exitForm={toggleFn.bind(this)}
          />
           :<Button onClickEvent={toggleFn.bind(this)} text='Add Task'/>
  }

  render() {
    return(
      <div>
        {this.renderTemplateTasks(this.state.currentTemplateTasks.noob,
                                  {heading: 'Newbie Template Tasks',
                                   showForm: this.state.showTemplateTaskForNoob,
                                   toggleFn: this.toggleTempTaskNoobForm,
                                   userRole: 'noob'})}
        {this.renderTemplateTasks(this.state.currentTemplateTasks.mentor,
                                  {heading: 'Mentor Template Tasks',
                                   showForm: this.state.showTemplateTaskForMentor,
                                   toggleFn: this.toggleTempTaskMentorForm,
                                   userRole: 'mentor'})}
      </div>
    )
  }
}
