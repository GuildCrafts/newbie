const express = require('express')
const router = express.Router()
const path = require('path')
const pg = require('pg')
const publicPath = path.resolve(__dirname, './public')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(publicPath+'/index.html')
})

module.exports = router
