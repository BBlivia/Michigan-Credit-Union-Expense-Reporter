const express = require('express')
const router = express.Router()
const expenseController = require('../controllers/expense') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, expenseController.getExpense)

router.post('/createExpense', expenseController.createExpense)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router