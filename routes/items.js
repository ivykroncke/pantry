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
            res.redirect(`/weeks/${req.params.weeksId}/meals/${req.params.mealsId}`)
        })
})

router.delete('/:id', (req, res) => {
    //find the Week that we want to pull Data from
    Week.findById(req.params.weeksId)
    //using the data that is returned that is only THIS week
    .then(week => {
        const meal = week.meals.id(req.params.mealsId)
        //take the array inside the array by the id in the URL
        //and remove it
        meal.items.id(req.params.id).remove()
        return week.save()
    })
    .then(week => {
        res.redirect(`/weeks/${req.params.weeksId}/meals/${req.params.mealsId}/edit`)
    })
})

module.exports = router
