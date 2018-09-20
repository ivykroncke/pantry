var express = require('express')
var router = express.Router()
const { Weeks, Meal } = require('../db/schema')

//Show This Meal
router.get('/:id', (req, res) => {
    Meal.findById(req.params.weeksId)
        .then((week) => {
            res.render('meals/show'), {
                // weeksId: req.params.weeksId,
                // meal: week.meal.id(req.params.id)
            }
        })
})

module.exports = router