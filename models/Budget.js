const mongoose = require('mongoose')

const BudgetSchema = new mongoose.Schema({
 Budget: {
    type: Number,
   
  },

  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Budge', BudgetSchema)
