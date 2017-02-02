const express = require('express')
const router = express.Router()
const task = require('../database/queries/task.js')
const user = require('../database/queries/users.js')


router.get('/', (request, response, next) => {
  const currentUser = request.user
  user.findByHandle(currentUser.handle)
  .then( returnedUser => {
    task.getBy('user_id', returnedUser.id)
    .then( response.json )
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
  task.update( task_id, { is_complete })
  .then( response.json )
  .catch( err => {
    console.log(`Error updating property on Task id ${task_id} in the db`, err);
    throw err
  })

})

export default router
