const { Movement, Operation, Category, Monthlymodel } = require('../models')

const financeController = {
    
    index: async (req, res) => {
        
        const idUser = req.session.user.id

        const movements = await Operation.findAll({
            include : [{model : Category, as: "categories",
            include: [{model : Movement, as :'movements', where : {user_id : idUser}
            }]
        }]
            
        })
        //A
        const categories = await Operation.findAll({
            include: 'categories'
        })
        console.log('movements >>' + JSON.stringify(movements, null, 2));
        
        res.render('finance', { movements, categories });
    },
    categories: async (req, res) => {
     
      const categories = await Operation.findAll({
          include: 'categories'
      })
      
      res.status(200).json(categories);
  },
    
    addMovement: async (req, res) => {
        const { id } = req.params
        const { type, amount, comment, category_id } = req.body

        
        if(!comment){
            comment = "Divers"
        }

       const newMovement = await Movement.create({type, amount, comment, category_id, operation_id:id, user_id : req.session.user.id });

        if(type === "Mensuelle"){
            
            await Monthlymodel.create({type, amount, comment, category_id, operation_id:id, user_id : req.session.user.id });
        }
        res.status(201).json(newMovement);
    },
    addMonthlyModel: async (req, res) => {
        const { id } = req.params
        const { amount, comment, category_id } = req.body

        if(!comment){
            comment = "Divers"
        }

       const newMonthlyModel = await Monthlymodel.create({ amount, comment, category_id, operation_id:id, user_id : req.session.user.id });

       res.status(201).json(newMonthlyModel);
    },

    deleteOneMovement: async (req, res) => {
        try{
            const movementId = req.params.id;
            const movement = await Movement.findByPk(movementId);
      
            if (!movement){
              return res.status(404).redirect("/finance");
            }
      
            await movement.destroy();
      
            res.status(204);
            res.redirect('/finance');
            
      
          }catch (error){
            console.error(error);
            res.status(500).json({ message: 'an unexpected error occured...'});
          } 
          
    },

    async editOneMovement(req, res){
        try{
          
          const userDemandId = req.session.user.id;  
          const movementId = req.params.id;
          const movement = await Movement.findByPk(movementId);
    
          if (!movement){
            return res.status(404).json({ message: `movement with id ${movementId} not found.`});
          }

          if (userDemandId !== movement.user_id){
            return res.status(404).json({ message: `movement with id ${movementId} does not correspond with user.`});
          }
    
          const { amount, comment, category_id } = req.body;    
    
          if (!amount >= 0){
            return res.status(400).json({ message: 'amount should not be under 0'});
          }
    
          if (amount){
            movement.amount = amount;
          }
    
          if (comment){
            movement.comment = comment;
          }
    
          if (category_id){
            movement.category_id = category_id;
          }  
    
          await movement.save();
    
          res.status(200).json(movement);
    
        }catch (error){
          console.error(error);
          res.status(500).json({ message: 'an unexpected error occured...'});
        }  
      },

    manageMonthlyMovements: async (req, res) => {
        
        const idUser = req.session.user.id

        const movements = await Operation.findAll({
            include : [{model : Category, as: "categories",
            include: [{model : Monthlymodel, as :'monthlymodels', where : {user_id : idUser},
            }]
        }]
            
        })

        // console.log('Log de mouvement' + JSON.stringify(movements))

        const categories = await Operation.findAll({
            include: 'categories'
        })
        res.render('monthlyedit', { movements, categories });
    },
    createMovementsByMonthly: async (req, res) => {
        
        const idUser = req.session.user.id

        const movements = await Monthlymodel.findAll({
            where : {user_id : idUser}
        })

        for (const movement of movements) {
            
            await Movement.create({type : 'Mensuelle', amount : movement.amount, comment : movement.comment, category_id : movement.category_id, operation_id : movement.operation_id, user_id : movement.user_id});
        }

        res.redirect('/finance');
    }
};

module.exports = financeController;
