const express = require('express')
const router = express.Router()
const expenseController = require('../controllers/expense') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const budgetController = require('../controllers/budget')

router.get('/', ensureAuth, expenseController.getExpense)

router.post('/createExpense', expenseController.createExpense)

 router.post('/createBudget', budgetController.createBudget)
 router.post('/updateBudget', budgetController.updateBudget)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router