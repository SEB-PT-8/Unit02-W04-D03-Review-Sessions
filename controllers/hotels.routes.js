const router = require('express').Router()
const Hotel = require('../models/Hotel')


router.get('/',async (req,res)=>{
    const allHotels = await Hotel.find() // gets all the hotels
    res.render('hotels/all-hotels.ejs',{allHotels:allHotels}) // do not add /all-hotels.ejs
})

router.get('/new',(req,res)=>{
    res.render('hotels/create-hotel.ejs')
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


router.get('/:id', async(req,res)=>{
    const foundHotel = await Hotel.findById(req.params.id)
    res.render('hotels/hotel-details.ejs',{hotel: foundHotel})
})


// Deleting a hotel
router.post('/delete/:id',async(req,res)=>{
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id)
    res.redirect('/hotels')
})

module.exports = router