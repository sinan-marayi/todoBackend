const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Todo',todoSchema)
