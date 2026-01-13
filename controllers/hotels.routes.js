const router = require('express').Router()

router.get('/',(req,res)=>{
    res.render('all-hotels.ejs') // do not add /all-hotels.ejs
})

router.get('/new',(req,res)=>{
    res.render('create-hotel.ejs')
})
module.exports = router