import express from 'express'
import path from 'path'
import * as templateTask from '../database/queries/template_task'

const router = express.Router()

router.get('/', function(req, res, next){
  res.send('noob')
})

export default router
