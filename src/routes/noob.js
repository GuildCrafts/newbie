import express from 'express'
import path from 'path'
import * as noob from '../database/queries/noob'

const router = express.Router()

router.get('/', function(req, res, next){
  res.send('noob')
})

router.get('/unassigned_mentor', function(req, res) {
  noob.unassignedMentor()
  .then(noobs => res.json(noobs));
});

export default router
