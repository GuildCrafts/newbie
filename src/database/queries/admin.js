import knex from '../knex'

import {
  createRecord,
  findRecord,
  updateRecord,
  deleteRecord,
  findAllWhere,
  findAll
} from './utilities'

const assignNoobToMentor = ( mentor_github_handle, noob_github_handle ) => {
  const { mentor_id } = findRecord('user', 'github_handle', mentor_github_handle )
  updateRecord( 'noob', 'github_handle', noob_github_handle, {'mentor_id' : mentor_id} )
  .then( noob => noob )
}

export assignNoobToMentor
