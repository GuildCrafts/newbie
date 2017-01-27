import knex from '../knex'

import * as utilities from './utilities'

const create = attributes =>
  utilities.createRecord('users', attributes)

const findByHandle = github_handle =>
  utilities.findRecord('users', 'github_handle', github_handle)

const updateByHandle = (github_handle, attributes) =>
  utilities.updateRecord('users', 'github_handle', github_handle, attributes)

const deleteByHandle = github_handle =>
  utilities.deleteRecord('users', 'github_handle', github_handle)

const findByRole = role =>
  utilities.findAllWhere('users', 'role', role )

const findAll = () =>
  utilities.findAll('users')

export {
  create,
  findByHandle,
  updateByHandle,
  deleteByHandle,
  findByRole,
  findAll
}
