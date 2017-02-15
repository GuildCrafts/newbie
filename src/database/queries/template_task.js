import knex from '../knex'
import * as _ from './utilities'

const add = attributes =>
  _.createRecord( 'template_task', attributes )

const deleteAll = () =>
  _.deleteAll( 'template_task' )

const deleteRecord = ( column, data) =>
  _.deleteRecord('template_task', column, data);

const getAll = () =>
  _.findAll( 'template_task' )
  .orderBy('days_to_complete', 'asc')

const getBy = ( column, data ) =>
  _.findAllWhere( 'template_task', column, data )

const update = ( id, attributes ) =>
  _.updateRecord( 'template_task', 'id', id, attributes )

const expunge = ( column, data ) =>
  _.deleteRecord( 'template_task', column, data )

export { add, deleteAll, getAll, getBy, update, expunge, deleteRecord }
