import knex from '../knex'
import * as _ from './utilities'

const add = attributes =>
  _.createRecord( 'tag', attributes )

const getAll = () =>
  _.findAll( 'tag' )
  .orderBy('names', 'asc')

const getBy = ( column, data ) =>
  _.findAllWhere( 'template_task', column, data )

const expunge = ( column, data ) =>
  _.deleteRecord( 'tag', column, data )


export { add, getAll, getBy, expunge }
