var express = require('express')
var router = express.Router({mergeParams: true})
const { Week, Meal } = require('../db/schema')

// NEW, render new form
router.get('/new', (req, res) => {
    res.render('meals/new', { 
        weeksId: req.params.weeksId })
})

// Show This Meal
router.get('/:id', (req, res) => {
    Week.findById(req.params.weeksId)
        .then(week => {
            res.render('meals/show', { 
                mealId: req.params.id,
                meal: week.meals.id(req.params.id),
                week
            })
        }) 
})

//EDIT, RENDER EDIT FORM
router.get('/:id/edit', (req, res) => {
    Week.findById(req.params.weeksId)
      .then(week => {
        res.render('meals/edit', { 
            mealId: req.params.id,
            meal: week.meals.id(req.params.id),
            week
        })
      })
  })

// CREATE, submit new
router.post('/', (req, res) => {
    const newMeal = new Meal(req.body)
    Week.findById(req.params.weeksId)
        .then(week => {
            week.meals.push(newMeal)
            return week.save()
        })
        .then(week => {
            res.redirect(`/weeks/${req.params.weeksId}`)
        })
})

//UPDATE
router.put('/:id', (req, res) => {
    Week.findById(req.params.weeksId)
        .then(week => {
            const updatedMeal = week.meals.id(req.params.id)
            updatedMeal.set(req.body)
            return week.save()
        })
        .then(week => {
            res.redirect(`/weeks/${req.params.weeksId}/`)
        })
  })

//DELETE
router.delete('/:id', (req, res) => {
    Week.findById(req.params.weeksId)
    .then(week => {
        week.meals.id(req.params.id).remove()
        return week.save()
    })
    .then(week => {
        res.redirect(`/weeks/${req.params.weeksId}/`)
    })
  })


module.exports = router
