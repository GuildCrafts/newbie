import knex from '../knex'

import {
  createRecord,
  findRecord,
  updateRecord,
  deleteRecord,
  findAllWhere,
  findAll
} from './utilities'

const findMentorsNoobs = ( github_handle ) => {
  const { mentor_id } = findRecord('user', 'github_handle', github_handle )
  findAllWhere('noobs', 'mentor_id', mentor_id ).then(noob => noob)
}

export findMentorsNoobs 
