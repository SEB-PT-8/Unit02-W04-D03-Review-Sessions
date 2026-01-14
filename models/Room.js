const mongoose = require('mongoose')
/* 
roomNumber: Number, required: trueSpace: Number, max:100, min: 10hotel: type should be ObjectId and it should reference the Hotel model
*/

const roomSchema = new mongoose.Schema({
    roomNumber:{
        type: Number,
        required:true
    },
    space:{
        type:Number,
        min: 10,
        max: 100
    },
    hotel:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel'
    }
})

const Room = mongoose.model('Room',roomSchema)

module.exports = Room