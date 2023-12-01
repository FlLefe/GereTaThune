const { Movement, Operation, Category } = require('../models')

const financeController = {
    
    index: async (req, res) => {
        
        const idUser = req.session.user.id
        const movements = await Operation.findAll({
            include : [{model : Movement, as: "movements",
            include: 'category',
            where : {user_id : idUser}}],
            order: [
                ['movements', 'category_id', 'ASC'],
                ['movements', 'amount', 'DESC']
              ]
            
        })

        const movementByCategory = await Category.findAll({
            include : 'movements',
        })

        console.log(JSON.stringify(movementByCategory, null, 2))

        // console.log(JSON.stringify(movements, null, 2))
        const categories = await Operation.findAll({
            include: 'categories'
        })
        res.render('finance', { movements, categories });
    },
    
    addMovement: async (req, res) => {
        const { id } = req.params
        const { type, amount, comment, category_id } = req.body

        await Movement.create({type, amount, comment, category_id, operation_id:id, user_id : req.session.user.id });

        res.redirect('/finance');
    }
};

module.exports = financeController;
