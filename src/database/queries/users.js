import knex from '../knex'

import * as utilities from './utilities'

const create = attributes =>
  utilities.createRecord('users', attributes).then( user => user )

const findByHandle = github_handle =>
  utilities.findRecord('users', 'github_handle', github_handle).then(user => user)

const updateByHandle = (github_handle, attributes) =>
  utilities.updateRecord('users', 'github_handle', github_handle, attributes).then(user => user)

const deleteByHandle = github_handle =>
  utilities.deleteRecord('users', 'github_handle', github_handle)

const findByRole = role =>
  utilities.findAllWhere('users', 'role', role ).then(user => user)

const findAll = () =>
  utilities.findAll('users').then(user => user)

export {
  create,
  findByHandle,
  updateByHandle,
  deleteByHandle,
  findByRole,
  findAll
}
