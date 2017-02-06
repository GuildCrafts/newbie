const express = require('express')
const router = express.Router()
const task = require('../database/queries/task.js')
const user = require('../database/queries/users.js')


router.get('/', (request, response, next) => {
  const currentUser = request.user

  user.findByHandle(currentUser.handle)
  .then( returnedUser => {
    return task.getBy('user_id', returnedUser.id)
    .then( tasks => {
      return response.json(tasks)
    } )
    .catch( err => {
      console.log(`Error retrieving tasks for user ${currentUser.handle} from the db`, err);
      throw err
    })
  })
  .catch( err => {
    console.log(`Error getting user with github_handle:${currentUser.handle} from the db`, err);
    throw err
  })
})

router.post('/:task_id', (request, response, next) => {
  const { task_id } = request.params
  const { is_complete } = request.body
  const currentUser = request.user
  Promise.all([user.findByHandle(currentUser.handle), task.getBy('id',task_id)])
  .then( ([ promised_user, promised_task ]) => {
    if( promised_user.id === promised_task[0].user_id || promised_user.role === 'admin'){
      task.update( task_id, { is_complete })
      .then( promised_task => {
        response.json(promised_task)
      })
      .catch( err => {
        console.log(`Error updating property on Task id ${task_id} in the db`, err);
        throw err
      })
    } else {
      console.log('Invalid user for task');
    }
  })
  .catch( err => {
    console.log(`Error loading user ${currentUser.handle}, or Task id ${task_id}.`);
    throw err
  })
})

export default router
