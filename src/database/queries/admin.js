import knex from '../knex'

import * as utilities from './utilities'

const assignTo = (mentor_github_handle, noob_github_handle) => {
  return utilities.findRecord('users', 'github_handle', mentor_github_handle)
  .then( mentor => {
    return utilities.updateRecord('noob', 'github_handle', noob_github_handle, {'mentor_id': mentor.id })
  })
}

export {assignTo}
