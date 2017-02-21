import express from 'express'
import path from 'path'
import groupBy from 'lodash/groupBy'
import * as templateTask from '../database/queries/template_task'
const router = express.Router()

router.get('/', function(req, res, next){
  templateTask.getAll()
  .then( results => {
    const templateTasks = groupBy(results, task => task.user_role)
    res.json(templateTasks)
  })
})

router.post('/', function(req, res, next){
  templateTask.add(req.body)
  const newTemplateTask = {
    title: req.body.title,
    description: req.body.description,
    days_to_complete: req.body.days_to_complete,
    user_role: req.body.user_role
  }
  templateTask.add(newTemplateTask)
  .then(results => {
    res.json(results[0])
  })
})

router.put('/:id', function(req, res, next){
  const { id } = req.params
  const updateTemplateTask = {
    title: req.body.title,
    description: req.body.description,
    days_to_complete: req.body.days_to_complete,
    user_role: req.body.user_role
  }
  templateTask.update(id, updateTemplateTask)
  .then(results => {
    console.log(results)
    res.json(results)
  })
})

router.delete('/:id', function(req, res, next){
  const {id} = req.params
  templateTask.deleteRecord('id', id).then(result => {
    res.json({message: 'Successfully deleted the task.'});
  })
})

export default router
