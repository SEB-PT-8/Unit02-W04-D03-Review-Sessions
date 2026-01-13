const mongoose = require('mongoose')

// Schema

const hotelSchema = new mongoose.Schema({
    hotelName: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        min: 0,
        max: 5
    },
    city: String
})


// Model

const Hotel = mongoose.model('Hotel',hotelSchema)

// Anytime in express we want to export
module.exports = Hotel