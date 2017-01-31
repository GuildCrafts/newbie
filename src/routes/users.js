const express = require('express')
const router = express.Router()

// router.get('/mentor', (req, res, next) => {
//
// })

router.get('/noob', (req, res, next) => {
  console.log(req.body)
})


module.exports = router
