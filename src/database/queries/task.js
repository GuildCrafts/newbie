import knex from '../knex'
import * as _ from './utilities'

const add = attributes =>
  _.createRecord( 'task', attributes )

const getAll = () =>
  _.findAll( 'task' )

const getBy = ( column, data ) =>
  _.findAllWhere( 'task', column, data )

const update = ( id, attributes ) =>
  _.updateRecord( 'task', 'id', id, attributes )

const expunge = ( column, data ) =>
  _.deleteRecord( 'task', column, data )

const deleteAll = () =>
  _.deleteAll( 'task' )

export { add, getAll, getBy, update, expunge, deleteAll }
