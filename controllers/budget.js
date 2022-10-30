const Budget = require('../models/Budget')
const User = require('../models/User')

module.exports = {
    
    createBudget: async (req, res)=>{
        try{
            await Budget.create({budget: req.body.budget, completed: false, userId: req.user.id})
            console.log('A new budget has been added!')
            res.redirect('/expense')
        }catch(err){
            console.log(err)
        }
    },
    updateBudget: async (req, res)=>{
        try{
            await User.findOneAndUpdate({_id: req.user}, {budget: req.body.budget})
            console.log('budget updated')
            
            res.redirect('/expense')
        }catch(err){
            console.log(err)
        }
    },
    
}    