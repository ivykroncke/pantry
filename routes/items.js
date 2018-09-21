const express = require('express')
const router = express.Router({ mergeParams: true })
const { Week, Meal, Item } = require('../db/schema')

router.get('/new', (req, res) => {
    Week.findById(req.params.weeksId)
        .then(week => {
            res.render('items/new', {
                meal: week.meals.id(req.params.mealsId),
                week
            })
        })
})

router.post('/', (req, res) => {
    res.send('post route hit')
    const newItem = new Item(req.body)
    Week.findById(req.params.weeksId)
        .then(week => {
            week.meals.items.push(newMeal)
            return week.save()
        })
        then(week => {
            res.redirect('/weeks')
        })
})

module.exports = router
