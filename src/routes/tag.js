import express from 'express'
import path from 'path'
import groupBy from 'lodash/groupBy'
import * as tag from '../database/queries/tag'
const router = express.Router()

router.get('/', function(req, res, next){
  tag.getAll()
  .then( results => {
    const tags = groupBy(results, tag => tag.name)
    res.json(tags)
  })
})

router.post('/', function(req, res, next){
  tag.add(req.body)
  const newTag = {
    name: req.body.name
  }
  tag.add(newTag)
  .then(results => {
    res.json(results[0])
  })
})

router.delete('/:id', function(req, res, next){
  const {id} = req.params
  tag.expunge('id', id).then(result => {
    res.json({message: 'Successfully deleted the tag.'});
  })
})

export default router
