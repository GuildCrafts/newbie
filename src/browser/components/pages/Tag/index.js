import React, { Component } from 'react'
import TagForm from '../../molecules/TagForm'
import TagList from '../../atoms/TagList'
import Button from '../../atoms/Button'
// import styles from './index.css'

export default class Tag extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showTag: false,
      // currentTags: { noob:[],mentor:[] },
      TagFormData: {label:''}
    }
    this.addTag = this.addTag.bind(this)
    this.deleteTag = this.deleteTag.bind(this)
  }

  getTag() {
    fetch('/api/tag', {
      method: 'get',
      mode: 'cors',
      credentials: 'same-origin'
    }).then( results => {
      return results.json()
    }).then(tags => {
      this.setState({
        currentTags : tags
      })
    })
  }

  addTag(tag, event){
    event.preventDefault()
    fetch('/api/tag', {
      method: 'post',
      mode: 'cors',
      credentials: 'same-origin',
      body: JSON.stringify(tag),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }).then(res => {
      this.getTag()
      this.setState({
        showTag: false,
      })
    })
  }

  deleteTag(tag) {
    const confirmed = confirm('Are you sure you want to delete this?');
    if(confirmed) {
      fetch('/api/tag/' + tag.id, {
        method: 'delete',
        mode: 'cors',
        credentials: 'same-origin'
      }).then( results => {
        return results.json();
      }).then (res => {
        this.getTag()
        // add notification here
        console.log(res);
      });
    };
  }

  toggleTagForm() {
    this.setState({
      showTag: !this.state.showTag
    })
  }

  componentWillMount(){
    this.getTag()
  }

  renderTags(tags, options){
    const tagFormJSX = this.addButtonOrForm(options.showForm, options.toggleFn)
    return (
      <div className='panel panel-info'>
          <TagList currentTags={tags} toggleFn={options.toggleFn} deleteTagCallback={this.deleteTag}/>
        {tagFormJSX}
      </div>
    )
  }

  addButtonOrForm(showForm, toggleFn) {
    return showForm ?
          <TagForm
            update={(event, inputField) => this.handleTagFormFields(event, inputField)}
            onSubmit={this.addTag}
            exitForm={toggleFn.bind(this)}
          />
           :<Button onClickEvent={toggleFn.bind(this)} text='Add Tag'/>
  }

  render() {
    return(
      <div>
        {this.renderTags(this.state.currentTags,
                                  {heading: 'Create Tag',
                                   showForm: this.state.showTag,
                                   toggleFn: this.toggleTagForm,
                                   userRole: 'admin'})}
      </div>
    )
  }
}
