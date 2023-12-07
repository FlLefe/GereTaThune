const { Movement, Operation, Category } = require('../models')

const financeController = {
    
    index: async (req, res) => {
        
        const idUser = req.session.user.id

        const movements = await Operation.findAll({
            include : [{model : Category, as: "categories",
            include: [{model : Movement, as :'movements', where : {user_id : idUser}
            }]
        }]
            
        })

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
