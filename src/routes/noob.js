import express from 'express'
import path from 'path'
import * as noob from '../database/queries/noob'
import * as users from '../database/queries/users'

const router = express.Router()

router.get('/', function(req, res, next){
  res.send('noob')
})

router.post('/', (request, response, next) => {
  const newNoob = {
    full_name: request.user.name,
    github_handle: request.user.handle,
    email: request.user.email,
    role: request.body.role,
    start_date: request.body.start_date
  }
  users.findByHandle( request.user.handle ).then( potentialUser => {
    if(!potentialUser){
      noob.create( newNoob )
      .then( results => {
        response.json({message: 'Welcome to newbie'})
      })
    } else {
      response.json({error: "You are already signed up!"})
    }
  })
})

router.get('/unassigned_mentor', function(req, res) {
  noob.unassignedMentor()
  .then(noobs => res.json(noobs));
});

export default router
