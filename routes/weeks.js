var express = require('express')
var router = express.Router()
const { Week } = require('../db/schema')

/* GET users listing. */
router.get('/', (req, res, next) => {
  Week.find()
  .then(week => {
    res.render('weeks/index', { week })
  })
})

module.exports = router