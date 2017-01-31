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
    console.log("FOUND USER");
    task.getBy('user_id', 1)
    .then( tasks => {
        response.json( tasks )
      })
  })


})

module.exports = router
