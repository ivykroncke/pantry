var express = require('express')
var router = express.Router()
const { Week } = require('../db/schema')

//INDEX, SHOW ALL
router.get('/', (req, res, next) => {
  Week.find()
  .then(week => {
    res.render('weeks/index', { week })
  })
})

//INDEX, SHOW ONE
router.get('/:id', (req, res) => {
  Week.findById(req.params.id)
  .then(week => {
    res.render('weeks/show', { week })
  })
})

module.exports = router