import knex from '../knex'
import * as _ from './utilities'

const add = attributes =>
  _.createRecord( 'tag', attributes )

const deleteAll = () =>
  _.deleteAll( 'tag' )

const getAll = () =>
  _.findAll( 'tag' )
  .orderBy('label', 'asc')

const getBy = ( column, data ) =>
  _.findAllWhere( 'tag', column, data )

const expunge = ( column, data ) =>
  _.deleteRecord( 'tag', column, data )


export { add, deleteAll, getAll, getBy, expunge }
