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
      res.json(user)
    })
  }
})

export default router
