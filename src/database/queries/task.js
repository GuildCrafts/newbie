import knex from '../knex'
import moment from 'moment'
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

const convertTemplateTasks = ( templateTasks, user ) => {
  let tasks = templateTasks.map( templateTask => {
    const attributes = {
        user_id: user.id,
        title: templateTask.title,
        is_complete: false,
        description: templateTask.description,
        due_date: moment( user.start_date ).add( templateTask.days_to_complete, 'days' ),
        template_task_id: templateTask.id
      }
      return attributes
  })
  return add(tasks)
}

export { add, getAll, getBy, update, expunge, deleteAll, convertTemplateTasks }
