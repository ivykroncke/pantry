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
    const newItem = new Item(req.body)
    Week.findById(req.params.weeksId)
        .then(week => {
            const meal = week.meals.id(req.params.mealsId)
            meal.items.push(newItem)
            return week.save()
        })
        .then(week => {
            res.send(week)
        })
})

module.exports = router
