import React, { Component } from "react"
import TemplateTaskForm from '../../molecules/TemplateTaskForm'

export default class ListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {clickedEdit: false}
    this.toggleClickedEdit = this.toggleClickedEdit.bind(this)
    this.updateTemplateTask = this.updateTemplateTask.bind(this)
  }

  toggleClickedEdit() {
    this.setState({clickedEdit: !this.state.clickedEdit})
  }

  updateTemplateTask(task){
    const confirmed = confirm('Are you sure you want to update this?');
    if(confirmed) {
      fetch('/api/template_tasks/' + this.props.task.id, {
        method: 'put',
        mode: 'cors',
        credentials: 'same-origin',
        body: JSON.stringify(task),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      }).then(result => {
        this.toggleClickedEdit()
      })
    }
  }

  updateButtonOrForm(userRole) {
    const { task } = this.props
    debugger
    return this.state.clickedEdit ?
            <div>
              <TemplateTaskForm
                userRole={userRole}
                update={(event, inputField) => this.handleTempTaskFormFields(event, inputField)}
                onSubmit={this.updateTemplateTask}
                exitForm={this.toggleClickedEdit}
                {...this.props}
              />
            </div>
            :
            <tr key={task.id}>
             <td>{task.title}</td>
             <td>{task.description}</td>
             <td>{task.days_to_complete}</td>
             <td>
               <button type="button" className="btn btn-default"
                 aria-label="Left Align" onClick={this.props.deleteTaskCallback.bind(this, task)}>
                 Delete
               </button>
               <button type="button" className="btn btn-default"
                 aria-label="Left Align" onClick={this.toggleClickedEdit}>
                 Edit
               </button>
             </td>
           </tr>
  }

  render() {
    return this.updateButtonOrForm(this.props.userRole)
  }
}
