var express = require('express')
var router = express.Router()
const { Week } = require('../db/schema')

router.get('/', (req, res) => {
  res.redirect('/weeks')
})

module.exports = router
