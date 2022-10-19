const mongoose = require('mongoose')

const BudgetSchema = new mongoose.Schema({
 
 budget: { type: Number, required: true},
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Budget', BudgetSchema)
