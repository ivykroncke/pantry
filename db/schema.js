const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    name: String,
    quantity: Number,
    unit: String
})

const MealSchema = new Schema({
    name: String,
    description: String,
    items: [ItemSchema]
})

const WeekSchema = new Schema({
    name: String,
    img: { type: String, default: '/images/pesto.jpg'},
    meals: [MealSchema]
})

const ItemModel = mongoose.model('Item', ItemSchema)
const MealModel = mongoose.model('Meal', MealSchema)
const WeekModel = mongoose.model('Week', WeekSchema)

module.exports = {
    Item: ItemModel,
    Meal: MealModel,
    Week: WeekModel
}