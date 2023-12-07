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
        let { type, amount, comment, category_id } = req.body

        
        if(!comment){
            comment = "Divers"
        }

        await Movement.create({type, amount, comment, category_id, operation_id:id, user_id : req.session.user.id });

        res.redirect('/finance');
    },
    manageMonthlyMovements: async (req, res) => {
        
        const idUser = req.session.user.id

        const movements = await Operation.findAll({
            include : [{model : Category, as: "categories",
            include: [{model : Movement, as :'movements', where : {user_id : idUser, type : 'Mensuelle'},
            }]
        }]
            
        })

        console.log('Log de mouvement' + JSON.stringify(movements))

        const categories = await Operation.findAll({
            include: 'categories'
        })
        res.render('monthlyedit', { movements, categories });
    },
};

module.exports = financeController;
