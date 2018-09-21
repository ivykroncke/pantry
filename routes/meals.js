var express = require('express')
var router = express.Router({mergeParams: true})
const { Week, Meal } = require('../db/schema')

// app.use('/weeks/:weeksId/meals', mealsRouter)

// NEW, render new form
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

// CREATE, submit new
router.post('/', (req, res) => {
    res.send('route hit!')
    // Meal.create(req.body)
    //     .then(meal => {
    //         res.redirect(`/meals/${meals._id}`)
    //     })
})

module.exports = router
