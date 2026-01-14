const router = require('express').Router()
const Hotel = require('../models/Hotel')
router.get('/',async (req,res)=>{
    const allHotels = await Hotel.find() // gets all the hotels
    res.render('all-hotels.ejs',{allHotels:allHotels}) // do not add /all-hotels.ejs
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