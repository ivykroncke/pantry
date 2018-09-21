var express = require('express')
var router = express.Router({mergeParams: true})
const { Week, Meal } = require('../db/schema')

// app.use('/weeks/:weeksId/meals', mealsRouter)

// Add a new meal to THIS week
router.get('/new', (req, res) => {
    res.render('meals/new')
})

// Show This Meal
router.get('/:id', (req, res) => {
    Week.findById(req.params.weeksId)
        .then(week => {
            res.render('meals/show', { 
                mealId: req.params.id,
                meal: week.meals.id(req.params.id)
            })
        }) 
})

module.exports = router

