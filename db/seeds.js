require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const Schema = require('./schema')

const { Week, Meal, Item } = Schema


const tofu = new Item({
    name: 'extra firm tofu',
    quantity: 6,
    unit: 'oz' 
})

const spinach = new Item({
    name: 'baby spinach',
    quantity: 1,
    unit: 'handful'
})

const egg = new Item({
    name: 'egg',
    quantity: 1
})

const pizzadough = new Item({
    name: 'store bought pizza dough',
    quantity: 1
})

const scramble = new Meal({
    name: 'Spinach Tofu Scramble',
    description: 'A warm and satisfying start to your morning!',
    items: [tofu, spinach, egg]
})

const whitepizza = new Meal({
    name: 'White Pizza with Truffle Oil',
    description: 'The indulgent end to your week you deserve!',
    items: [pizzadough]
})

const healthy = new Week({ 
    name: 'Happy and Healthy',
    img: '#',
    meals: [scramble]
})

const indulgent = new Week({
    name: 'Indulgent',
    img: '#',
    meals: [whitepizza]
})

Meal.deleteMany()
    .then(() => {
        return Meal.insertMany([healthy, indulgent])
    })
    .then(() => {
        console.log('Done Seeding!')
        mongoose.connection.close()
    })