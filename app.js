const express = require('express')
const app = express()

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))


// Connect to MongoDB
mongoose.connect('mongodb+srv://sinanmarayi:database@cluster0.cnjdoba.mongodb.net/Authentication?retryWrites=true&w=majority',{useNewUrlParser:true})
mongoose.connection.on('connected',()=>{
    console.log('connected to database');
})

// import routes
const todoRoute = require('./routes/todo')

// sample route
app.get('/',(req,res)=>{
    res.send('hello world')
})

// middleware
app.use('/todo',todoRoute)

// connect to server
const PORT = 5000
app.listen(PORT,()=>{
    console.log('server running on port '+PORT);
})