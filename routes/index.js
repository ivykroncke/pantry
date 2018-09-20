var express = require('express')
var router = express.Router()
const { Week } = require('../db/schema')

/* GET home page. */
router.get('/', (req, res) => {
  res.redirect('/weeks')
})

module.exports = router
