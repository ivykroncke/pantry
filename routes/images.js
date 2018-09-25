var express = require("express") 
var router = express.Router() 
const { Week, Image } = require("../db/schema") 

router.get("/new", (req, res) => {
    res.render('images/new')
})

router.post("/", (req, res) => {
    Image.create(req.body)
        .then(()=> {
            res.redirect('/weeks/new')
        })
  }) 

module.exports = router 
