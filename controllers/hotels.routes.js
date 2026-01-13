const router = require('express').Router()
const Hotel = require('../models/Hotel')
router.get('/',(req,res)=>{
    res.render('all-hotels.ejs') // do not add /all-hotels.ejs
})

router.get('/new',(req,res)=>{
    res.render('create-hotel.ejs')
})

router.post('/',async (req,res)=>{
    try{
    const createdHotel = await Hotel.create(req.body)
    res.redirect('/hotels')
    }
    catch(err){
        console.log(err)
    }
  
})
module.exports = router