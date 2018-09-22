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
const tortillas = new Item({ name: 'fresh tortillas', quantity: 6})
const porkloin = new Item({ name: 'high-quality pork loin', quantity: 12, unit: 'ounces'})
const sweetpotato = new Item({ name: 'sweet potato', quantity: 2, unit: 'small'})
const kale = new Item({ name: 'pre-chopped kale', quantity: 12, unite: 'ounces'})

//MEALS
const scramble = new Meal({ name: 'Spinach Tofu Scramble', description: 'A warm and satisfying start to your morning!', items: [tofu, spinach, egg] })
const whitepizza = new Meal({ name: 'White Pizza with Truffle Oil', description: 'The indulgent end to your week you deserve!', items: [pizzadough, spinach] })
const carnitas = new Meal({ name: 'Rustic Carnitas with Queso Fresca', description: 'A weeknight delight that won\'t go to your waistband!', items: [tortillas, porkloin]})
const veggieplate = new Meal({ name: 'Farmer\'s Autumn Vegetable Plate', description: 'Seasonal favorites ready in less than 30 minutes!', items: [sweetpotato, kale]})

//WEEKS
const healthy = new Week({ name: 'Happy and Healthy', img: '/images/greensmoothie.jpg', meals: [scramble] })
const indulgent = new Week({ name: 'Indulgent', img: '/images/mockupimage.jpeg', meals: [whitepizza] })
const balanced = new Week({ name: 'Perfectly Balanced', img: '/images/tacos.jpeg', meals: [carnitas]})
const veggie = new Week({ name: 'Veggie Week', img: '/images/veggieplate.jpeg', meals: [veggieplate]})

Week.deleteMany()
    .then(() => {
        return Week.insertMany([healthy, indulgent, balanced, veggie])
    })
    .then(() => {
        console.log('Done Seeding!')
        mongoose.connection.close()
    })