import knex from '../knex'
import moment from 'moment'
import * as _ from './utilities'
import * as templateTasks from './template_task'

const add = attributes =>
  _.createRecord( 'task', attributes )

const getAll = () =>
  _.findAll( 'task' )

const getTasksAndUsers = () =>
  knex.select('*').from('task').leftJoin('users', 'task.user_id', 'users.id')

const getBy = ( column, data ) =>
  _.findAllWhere( 'task', column, data )

const update = ( id, attributes ) =>
  _.updateRecord( 'task', 'id', id, attributes )

const expunge = ( column, data ) =>
  _.deleteRecord( 'task', column, data )

const deleteAll = () =>
  _.deleteAll( 'task' )

const convertTemplateTasks = ( templateTasks, userId, startDate ) => {
  let tasks = templateTasks.map( templateTask => {
    const attributes = {
        user_id: userId,
        title: templateTask.title,
        is_complete: false,
        description: templateTask.description,
        due_date: moment( startDate ).add( templateTask.days_to_complete, 'days' ),
        template_task_id: templateTask.id
      }
      return attributes
  })
  return add(tasks)
}

const addTemplateTasksByRole = (role, userId, startDate) => {
  return templateTasks.getBy('user_role', role)
  .then(templateTasks => {
    return convertTemplateTasks(templateTasks, userId, startDate)
  });
}

export { add,
         getAll,
         getBy,
         update,
         expunge,
         deleteAll,
         getTasksAndUsers,
         convertTemplateTasks,
         addTemplateTasksByRole }
