const express = require('express')
const router = express.Router({ mergeParams: true })
const { Week } = require('../db/schema')

router.get('/', (req, res) => {
    res.send('new route!')
    // Week.findById(req.params.weeksId)
    //     .then(week => {
    //         const meal = week.meals.id(req.params.weeksId),
    //         const item = meal.items.id(req.params.id)
    //         res.send(item)
    //     })
})


module.exports = router;
