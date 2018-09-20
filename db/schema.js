const mongoose = require('mongoose')
const SChema = mongoose.Schema

//itemSchema
const ItemSchema = new Schema({
    name: String,
    quantity: String
})

//mealSchema
const MealSchema = new Schema({
    name: String,
    description: String,
    items: []
})

//weekSchema
const WeekSchema = new Schema({
    name: String,
    img: [], //an array of images to choose from...
    description: String,
    meals: [MealSchema]
})



const WeekModel = mongoose.model('Week', WeekSchema)

module.exports = {
    Week: WeekModel
}