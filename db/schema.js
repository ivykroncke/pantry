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

const ImageSchema = new Schema({
    src: String
})

const WeekSchema = new Schema({
    name: String,
    img: { type: [ImageSchema], default: '/images/pesto.jpg' },
    meals: [MealSchema]
})

const ItemModel = mongoose.model('Item', ItemSchema)
const MealModel = mongoose.model('Meal', MealSchema)
const ImageModel = mongoose.model('Image', ImageSchema)
const WeekModel = mongoose.model('Week', WeekSchema)

module.exports = {
    Item: ItemModel,
    Meal: MealModel,
    Image: ImageModel,
    Week: WeekModel
}