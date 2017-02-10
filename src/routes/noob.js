import express from 'express'
import path from 'path'
import * as noob from '../database/queries/noob'
import * as users from '../database/queries/users'
import * as tasks from '../database/queries/task'

const router = express.Router()

router.get('/:githubHandle', function(request, response, next){
  const currentUserHandle = request.user.handle
  noob.findByHandle( currentUserHandle )
  .then( newbie => {
    users.findNoobsMentor( newbie.mentor_id )
    .then( mentor => {
      return response.json({newbie, mentor })
    })
  })
  .catch( err => {
    console.log(`Error retrieving newbie ${currentUserHandle} from the db`, err);
    throw err
  })
})

router.post('/', (request, response, next) => {
  const currentUser = request.user
  const newNoob = {
    full_name: currentUser.name,
    github_handle: currentUser.handle,
    email: currentUser.email,
    role: request.body.role,
    start_date: request.body.start_date
  }
  users.findByHandle( currentUser.handle ).then( potentialUser => {
    if(!potentialUser){
      noob.create( newNoob )
      .then( noobs => {
        console.log('noob created:', noobs[0])
        return tasks.addTemplateTasksByRole('noob', noobs[0].id, noobs[0].start_date)
      })
      .then(templateTasks => {
        response.json({message: 'Welcome to newbie'})
      });
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
