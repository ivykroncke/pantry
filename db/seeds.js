require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const Schema = require('./schema')

const { Item, Meal, Week } = Schema

//ITEMS
const tofu = new Item({ name: 'extra firm tofu', quantity: 6, unit: 'oz' })
const spinach = new Item({ name: 'baby spinach', quantity: 1, unit: 'handful' })
const egg = new Item({ name: 'egg', quantity: 1 })
const pizzadough = new Item({ name: 'store bought pizza dough', quantity: 1 })

//MEALS
const scramble = new Meal({ name: 'Spinach Tofu Scramble', description: 'A warm and satisfying start to your morning!', items: [tofu, spinach, egg] })
const whitepizza = new Meal({ name: 'White Pizza with Truffle Oil', description: 'The indulgent end to your week you deserve!', items: [pizzadough, spinach] })

//WEEKS
const healthy = new Week({ name: 'Happy and Healthy', img: '#', meals: [scramble] })
const indulgent = new Week({ name: 'Indulgent', img: '#', meals: [whitepizza] })

console.log([healthy, indulgent])
console.log([scramble, whitepizza])
console.log([tofu, spinach, egg, pizzadough])

Meal.deleteMany()
    .then(() => {
        return Week.insertMany([healthy, indulgent])
    })
    .then(() => {
        console.log('Done Seeding!')
        mongoose.connection.close()
    })