import express from 'express'
import path from 'path'
import isAdmin from '../utils/admins'
import * as users from '../database/queries/users'

const router = express.Router()

const fakeAdminUser = (githubHandle) => {
  return {github_handle: githubHandle,
          role: 'admin'}
}

router.get('/current_user', function(req, res){
  const githubHandle = req.user.handle
  if(isAdmin(githubHandle)) {
    res.json(fakeAdminUser(githubHandle))
  } else {
    users.findByHandle(githubHandle)
    .then(user => {
      res.json(user || {})
    })
  }
})

router.post('/', (request, response, next) => {
  const newUser = {
    full_name: request.user.name,
    github_handle: request.user.handle,
    email: request.user.email,
    role: request.body.role
  }
  users.create( newUser )
  .then( results => {
    response.json({message: 'Welcome to newbie'})
  })
})



export default router
