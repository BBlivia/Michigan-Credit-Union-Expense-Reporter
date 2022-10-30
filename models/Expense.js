const mongoose = require('mongoose')


const ExpenseSchema = new mongoose.Schema({
    expense:{
        type: String,

    },

    userId:{
        type: String,
        required: true
    },

    cost:{
        type:Number,
        required:true
    }, 
    

})


module.exports = mongoose.model('Expense', ExpenseSchema)