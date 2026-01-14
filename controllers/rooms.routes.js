const Hotel = require('../models/Hotel')

const router = require('express').Router()



router.get('/new', async(req,res)=>{
    const allHotels = await Hotel.find()
    res.render('create-room.ejs',{allHotels:allHotels})
})


module.exports = router