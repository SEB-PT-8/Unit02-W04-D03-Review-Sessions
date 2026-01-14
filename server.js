// imports
const express = require("express") //importing express package
const app = express() // creates a express application
const dotenv = require("dotenv").config() //this allows me to use my .env values in this file
const mongoose = require("mongoose")
const morgan = require('morgan')
const hotelRoutes = require('./controllers/hotels.routes')
const roomRoutes = require('./controllers/rooms.routes')

app.use(express.static('public')) // my app will serve all static files from public folder
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))












async function connectToDB(){ //connection to the database
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Database")
    }
    catch(error){
        console.log("Error Occured",error)
    }
}


connectToDB() // connect to database














// Routes go here
app.use('/hotels',hotelRoutes)
app.use('/rooms',roomRoutes)









app.listen(3000,()=>{
    console.log('App is working')
}) // Listen on Port 3000
