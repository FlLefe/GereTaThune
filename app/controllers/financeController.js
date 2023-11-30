const { Movement, Operation } = require('../models')

const financeController = {
    
    index: async (req, res) => {
        console.log('req.session.user >>' + JSON.stringify(req.session.user, null, 2));
        
        const idUser = req.session.user.id
        const movements = await Movement.findAll({
            where: {user_id : idUser},
            include : ['operation', 'category']
        });

        const categories = await Operation.findAll({
            include: 'categories'
        })
        res.render('finance', { movements, categories });
    },
    
    addMovement: async (req, res) => {
        const { id } = req.params
        const { type, amount, category_id } = req.body

        await Movement.create({type, amount, category_id, operation_id:id, user_id : req.session.user.id });

        res.redirect('/finance');
    }
};

module.exports = financeController;