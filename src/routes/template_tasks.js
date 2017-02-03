import express from 'express'
import path from 'path'
import groupBy from 'lodash/groupBy'
import * as templateTask from '../database/queries/template_task'
const router = express.Router()

router.get('/', function(req, res, next){
  console.log('hello:')
  templateTask.getAll()
  .then( results => {
    const templateTasks = groupBy(results, task => task.user_role)
    res.json(templateTasks)
  })
})

router.post('/', function(req, res, next){
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

router.delete('/', function(req, res, next){
  req.send('delete')
})

export default router
