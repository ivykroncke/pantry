var express = require('express')
var router = express.Router({mergeParams: true})
const { Week, Meal } = require('../db/schema')

//Show This Meal
router.get('/:id', (req, res) => {
    //grab Week from the schema by its req params
    Week.findById(req.params.weeksId)
        //then when you have it, take that info
        .then(week => {
        //     //render the meals/show page
            res.render('meals/show', { week
                // meal: week.meals.id(req.params.id)
            })
        })
})

//Edit a Meal


module.exports = router

