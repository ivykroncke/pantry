const express = require('express')
const router = express.Router({ mergeParams: true })
const { Week, Meal, Item } = require('../db/schema')

// // '/weeks/:weeksId/meals/:mealsId/items/'
// router.get('/:id', (req, res) => {
//     Week.findById(req.params.weeksId)
//     .then(week => {
//         res.render('items/show', {
//             item: week.meals.items.id(req.params.id)
//         })
//     })
// })

router.get('/new', (req, res) => {
    res.send('new item route hit!')
})


module.exports = router
