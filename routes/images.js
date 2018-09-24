var express = require("express") 
var router = express.Router() 
const { Week, Image } = require("../db/schema") 

//RENDER A PAGE TO UPLOAD YOUR OWN IMAGE
router.get("/new", (req, res) => {
    res.render('images/new')
})

//CREATE
router.post("/", (req, res) => {
    Image.create(req.body).then(image => {
      res.redirect(`/weeks/edit`) 
    }) 
  }) 

module.exports = router 
