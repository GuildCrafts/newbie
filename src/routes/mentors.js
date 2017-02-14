import express from 'express'
import path from 'path'
import * as users from '../database/queries/users'
import * as noobs from '../database/queries/noob'
import * as tasks from '../database/queries/task'

const router = express.Router()

router.post('/claim_newbie', function(req, res){
  users.findByHandle(req.user.handle)
  .then(currentUser => {
    const newbieId = req.body.id
    noobs.updateById(newbieId,  {mentor_id: currentUser.id})
    .then((noob) => {
      tasks.addTemplateTasksByRole('mentor', currentUser.id, noob.start_date)
      .then(templateTasks => {
        res.send({mentor: `You have successfully claimed the newbie!`})
      });
    })
  })
})

export default router
