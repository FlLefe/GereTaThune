const { Movement } = require('../models')

const financeController = {
    index: async (req, res) => {

        const movements = await Movement.findAll();

        res.render('finance', {movements});
    },
    
    addMovement: async (req, res) => {

        const { type, amount, category_id, operation_id } = req.body

        await Movement.create({type, amount, category_id, operation_id, user_id : 2});

        res.redirect('/finance')
    }
};

module.exports = financeController;