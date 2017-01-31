const express = require('express')
const router = express.Router()
const path = require('path')
const pg = require('pg')
const task = require('../database/queries/task.js')
const user = require('../database/queries/users.js')


router.get('/', (request, response, next) => {
  const currentUser = request.user
  user.findByHandle(currentUser.handle)
  .then( returnedUser => {
    task.getBy('user_id', returnedUser.id)
    .then( tasks => {
        response.json( tasks )
      })
  })
  .catch( err => {
    return err
  })
})

router.post('/:task_id', (request, response, next) => {
  const { task_id } = request.params
  const { is_complete } = request.body
  task.update( task_id, { is_complete })
  .then( completedTask => {
    response.json(completedTask)
  })
  .catch( err => {
    return err
  })

})

export default router
