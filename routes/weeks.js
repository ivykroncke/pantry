var express = require('express')
var router = express.Router()
const { Week } = require('../db/schema')

//SHOW ALL
router.get('/', (req, res, next) => {
  Week.find()
  .then(week => {
    res.render('weeks/index', { week })
  })
})

//NEW, RENDER NEW FORM
router.get('/new', (req, res) => {
  res.render('weeks/new')
})

//SHOW ONE
router.get('/:id', (req, res) => {
  Week.findById(req.params.id)
  .then(week => {
    res.render('weeks/show', { week })
  })
})

//EDIT, RENDER EDIT FORM
router.get('/:id/edit', (req, res) => {
  Week.findById(req.params.id)
    .then(week => {
      res.render('weeks/edit', { week })
    })
})

//CREATE
router.post('/', (req, res) => {
  Week.create(req.body)
  .then(week => {
    res.redirect(`/weeks/${week._id}`)
  })
})

//UPDATE
router.put('/:id', (req, res) => {
  Week.findByIdAndUpdate(req.params.id, req.body)
  .then(week => {
    res.redirect(`/weeks/${week._id}`)
  })
})

//DELETE

module.exports = router