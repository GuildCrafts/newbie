const express = require('express')
const router = express.Router()
const user = require('../database/queries/users.js')

router.get('/', function(request, response, next) {
  const currentUser = request.user
  user.findByHandle(currentUser.handle)
  .then( returnedUser => {
    response.json(returnedUser)
  })
  .catch( err => {
    console.log(`Error getting user ${currentUser.handle} in /api/user`, err)
    throw err
  })
})

export default router
