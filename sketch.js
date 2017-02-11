const taskTitle = this.state.editmode
  ? <InputField
      value={task.title}
      update={(event, inputField) => this.handleTempTaskFormFields(event, inputField)}
    />
  : <p className={styles.text}>{task.title}</p>

const taskDescription = this.state.editmode
  ? <InputField value={task.description} />
  : <p className={styles.text}>{task.description}</p>

const taskDaysToComplete = this.state.editmode
  ? <InputField value={task.days_to_complete} />
  : <p className={styles.text}>{task.days_to_complete}</p>

const submitButton = this.state.editmode
  ? <button type="button" className={comboButton}
      aria-label="Left Align" onClick={this.submitEdits.bind(this, )}>
      Submit
    </button>
  : <button type="button" className={comboButton}
      aria-label="Left Align" onClick={this.props.deleteTaskCallback.bind(this, task)}>
      Delete
    </button>

    import React, { Component } from 'react'
    import InputField from '../../atoms/InputField'
    import styles from './index.css'

    export default class ListItem extends Component {

      constructor(props){
        super(props)
        this.state = {
          editmode: false
        }
      }

      toggleEditMode(){
        this.setState({ editmode: !this.state.editmode })
      }


      submitEdits(){
        const options = {
          method: 'PUT',
          mode: 'cors',
          headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }),
          credentials: 'same-origin',
          body: JSON.stringify(templateTask)
        }
        fetch( `/api/task/${this.props.task.id},`, options )
        .then( response => {
          this.getTemplateTask()
          this.toggleEditMode()
        })
      }

      render() {
        const task = this.props.task
        const comboButton = 'btn btn-default btn-sm ' + styles.button

        return (
          <div className='container'>
            <div className='col-md-2'>{task.title}</div>
            <div className='col-md-5'>{task.description}</div>
            <div className='col-md-1'>{task.days_to_complete}</div>
            <div className='col-md-4'>
              <button type="button" className={comboButton}
                aria-label="Left Align" onClick={this.toggleEditMode.bind(this)}>
                Edit
              </button>
              {submitButton}
              <div className='col-md-3'></div>
            </div>
            <div className={styles.bottomborder}></div>
          </div>
        )
      }
    }

    router.put('/:id', function(request, response, next){
      templateTask.update(request.body)
      .then(result => {
        res.json(result)
      })
    })
