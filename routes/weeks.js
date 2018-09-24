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

//LIST
router.get('/:id/list', (req, res) => {
  Week.findById(req.params.id)
    .then(week => {
        const allItems = {}
        const allMeals = week.meals
        allMeals.map(meal => {
          meal.items.map(item => {
            if (allItems[item.name]) {
              allItems[item.name] += item.quantity
            } else {
              allItems[item.name] = item.quantity
            }
          })
        })
        const entries = Object.entries(allItems) 
        res.render('weeks/list', { 
          entries,
          week
        })
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
router.delete('/:id', (req, res) => {
  Week.findByIdAndRemove(req.params.id)
  .then(() => {
    res.redirect('/weeks')
  })
})

module.exports = router