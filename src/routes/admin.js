import express from 'express'
import path from 'path'
import * as templateTask from '../database/queries/template_task'
import cors from 'cors'
const router = express.Router()

router.get('/template_task/get_template_tasks', function(req, res, next){
  let templateTasks = { mentor: [], noob: [] }
  templateTask.getAll()
  .then( results => {
    for(let task of results){
      if(task.user_role==='noob'){
        templateTasks.noob.push(task)
      } else if(task.user_role==='mentor') {
        templateTasks.mentor.push(task)
      }
    }
    res.json(templateTasks)
  })
})

router.post('/template_task/add_template_task/mentor', function(req, res, next){
  templateTask.add(req.body)
  const newTemplateTask = {
    name: req.body.template_task_name,
    body: req.body.template_task_body,
    days_to_complete: req.body.template_task_days_to_complete,
    user_role: req.body.role
  }
  templateTask.add(newTemplateTask)
  .then(results => {
    res.json(results[0])
  })
})
export default router
