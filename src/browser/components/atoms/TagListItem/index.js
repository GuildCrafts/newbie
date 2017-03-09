import React, { Component } from "react"
import TagForm from '../../molecules/TagForm'

export default class TagListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {clickedEdit: false}
    this.toggleClickedEdit = this.toggleClickedEdit.bind(this)
    this.updateTag = this.updateTag.bind(this)
  }

  toggleClickedEdit() {
    this.setState({clickedEdit: !this.state.clickedEdit})
  }

  updateTag(tag){
    const confirmed = confirm('Are you sure you want to update this?');
    if(confirmed) {
      fetch('/api/tags/' + this.props.tag.id, {
        method: 'put',
        mode: 'cors',
        credentials: 'same-origin',
        body: JSON.stringify(tag),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      }).then(result => {
        this.toggleClickedEdit()
      })
    }
  }

  updateButtonOrForm() {
    const { tag } = this.props
    return this.state.clickedEdit ?
            <div>
              <TagForm
                update={(event, inputField) => this.handleTagFormFields(event, inputField)}
                onSubmit={this.updateTag}
                exitForm={this.toggleClickedEdit}
                {...this.props}
              />
            </div>
            :
            <tr key={tag.id}>
             <td>{tag.name}</td>
             <td>
               <button type="button" className="btn btn-default"
                 aria-label="Left Align" onClick={this.props.deleteTagCallback.bind(this, tag)}>
                 Delete
               </button>
             </td>
           </tr>
  }

  render() {
    return this.updateButtonOrForm(this.props)
  }
}
