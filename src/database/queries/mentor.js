import knex from '../knex'

import * as utilities from './utilities'

const noobs = ( github_handle ) => {
  return utilities.findRecord('users', 'github_handle', github_handle )
  .then(mentor => {
    return utilities.findAllWhere('noob', 'mentor_id', mentor.id )
  })
}

export {noobs}
