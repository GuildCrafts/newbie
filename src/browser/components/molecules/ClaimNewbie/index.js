import React, { Component } from 'react'
import {fetchURL} from '../../../common/utils'

export default class ClaimNewbie extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.updateClaimedNewbieId = this.updateClaimedNewbieId.bind(this)
    this.claimNewbie = this.claimNewbie.bind(this)
  }

  claimNewbie(event) {
    event.preventDefault()
    fetchURL('/api/mentors/claim_newbie', {method: 'POST',
                                           body: {id: this.state.newbieId}})
    .then(response => {
      this.props.updateUnassignedNewbiesCallback()
    })
  }

  updateClaimedNewbieId(event) {
    this.setState({newbieId: event.target.value})
  }

  claimNewbieForm(newbies) {
    return(
      <div>
      <form className="form-inline">
      <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Unclaimed Newbies</label>
      <select defaultValue='Choose...' onChange={this.updateClaimedNewbieId}
      className="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        {newbies.map(newbie =>
                     <option key={newbie.id} value={newbie.id}>{newbie.github_handle}</option>
                    )}
      </select>
      <button type="submit" className="btn btn-primary" onClick={this.claimNewbie}>
        Claim Newbie
      </button>
      </form>
      </div>
    )
  }

  render() {
    const jsx = this.props.newbies.length === 0 ?
          <div>All Newbies have been claimed.</div>
          : (this.claimNewbieForm(this.props.newbies))
    return jsx
  }
}
