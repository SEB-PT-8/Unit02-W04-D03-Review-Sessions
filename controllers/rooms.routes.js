const Hotel = require('../models/Hotel')
const Room = require('../models/Room')

const router = require('express').Router()



router.get('/new', async(req,res)=>{
    const allHotels = await Hotel.find()
    res.render('create-room.ejs',{allHotels:allHotels})
})

router.post('/', async(req,res)=>{
    const createdRoom = await Room.create(req.body)
    res.redirect('/rooms/new')
})


module.exports = router