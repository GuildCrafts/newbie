import knex from '../knex'

import * as utilities from './utilities'

const create = attributes =>
  utilities.createRecord('noob', attributes)

const findByHandle = github_handle =>
  utilities.findRecord('noob', 'github_handle', github_handle)

const updateByHandle = (github_handle, attributes) =>
  utilities.updateRecord('noob', 'github_handle', github_handle, attributes)

const deleteByHandle = github_handle =>
  utilities.deleteRecord('noob', 'github_handle', github_handle)

const getAllByStartDate = start_date =>
  utilities.findAllWhere('noob', 'start_date', start_date)

const findAll = () =>
  utilities.findAll('noob')

const graduate = github_handle => {
  return knex.transaction((t) => {
    return knex('noob')
      .transacting(t)
      .where('github_handle', github_handle)
      .then(result => {
        result[0].role = 'mentor'
        delete result[0].mentor_id
        delete result[0].start_date
        return knex('users')
          .transacting(t)
          .insert(result[0])
          .then(_ => {
            return knex('noob')
            .where('github_handle', github_handle)
            .del()
          })
      })
      .then(t.commit)
      .catch(t.rollback)
  })
}


export {
  create,
  findByHandle,
  updateByHandle,
  deleteByHandle,
  getAllByStartDate,
  findAll,
  graduate
}
