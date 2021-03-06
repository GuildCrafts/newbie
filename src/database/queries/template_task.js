import knex from '../knex'
import moment from 'moment'
import * as task from './task'
import * as user from './users'
import * as _ from './utilities'

const add = attributes =>
  _.createRecord( 'template_task', attributes )

const deleteAll = () =>
  _.deleteAll( 'template_task' )

const getAll = () =>
  _.findAll( 'template_task' )
  .orderBy('days_to_complete', 'asc')
  .orderBy('title', 'asc')

const getBy = ( column, data ) =>
  _.findAllWhere( 'template_task', column, data )

const update = ( id, attributes ) =>
  _.updateRecord( 'template_task', 'id', id, attributes )

const expunge = ( column, data ) =>
  _.deleteRecord( 'template_task', column, data )

const convert = github_handle => {
  return user.create({
    full_name: "Face",
    github_handle: "TB",
    role: 'noob',
    email: 'TB@HB.com',
  }).then(user => {
    return user.start_date
  })

}

export { add, deleteAll, getAll, getBy, update, expunge, convert }
