
const Expense = require('../models/Expense');
const Budget = require('../models/Budget');
module.exports = {
    //getExpense
    
    createExpense: async(req, res)=>{
       try{
        await Expense.create({expense: req.body.itemName, cost: req.body.itemCost, completed: false, userId: req.user.id})
        console.log('charge has been added')
        res.redirect('/expense')
       }catch(err){
        console.log(err)
       }
    },

    getExpense: async(req, res) =>{
        console.log(req.user)
        try{
            const expenseItems = await Expense.find({userId: req.user.id})
            const itemsLeft = await Expense.countDocuments({userId: req.user.id, completed:false})
            const budget = await Budget.find({budget: req.body.budget})
            const total = expenseItems.reduce((sum, expense)=> expense.cost+sum, 0)
            console.log({total})
            
            res.render('expense.ejs', {expenses: expenseItems, left: itemsLeft, total, user:req.user, budget:budget  })
        }catch(err){
            console.log(err)
        }
    },

    deleteExpense: async(req, res)=>{
        console.log(req.body.expenseIdFromJSFile)
        try{
            await Expense.findOneAndDelete({_id: req.body.expenseIdFromJSFile})
            console.log('Expense Deleted')
        }catch(err){
            console.log(err)
        }
    }
    
}
