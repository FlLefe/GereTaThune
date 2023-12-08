const User = require('./User');
const Movement = require('./Movement');
const Operation = require('./Operation');
const Category = require('./Category');
const Monthlymodel = require('./Monthlymodel');

// Associations User - Movement
User.hasMany(Movement, {
    foreignKey: 'user_id',
    as: 'movements',
});
Movement.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user',
});

// Assocations Movement - Operation
Operation.hasMany(Movement,{
    foreignKey: 'operation_id',
    as: 'movements'
})
Movement.belongsTo(Operation, {
    foreignKey: 'operation_id',
    as: 'operation'
});


// Assocations Movement - Category
Category.hasMany(Movement,{
    foreignKey: 'category_id',
    as: 'movements'
})
Movement.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'category'
});

// Assocations Operation - Category pour les formulaires dynamiques
Operation.hasMany(Category,{
    foreignKey: 'operation_id',
    as: 'categories'
})
Category.belongsTo(Operation, {
    foreignKey: 'operation_id',
    as: 'operation'
});

// test models


// Associations User - Monthlymodel
User.hasMany(Monthlymodel, {
    foreignKey: 'user_id',
    as: 'monthlymodels',
});
Monthlymodel.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user',
});

// Assocations Movement - Operation
Operation.hasMany(Monthlymodel,{
    foreignKey: 'operation_id',
    as: 'monthlymodels'
})
Monthlymodel.belongsTo(Operation, {
    foreignKey: 'operation_id',
    as: 'operation'
});


// Assocations monthlymodel - Category
Category.hasMany(Monthlymodel,{
    foreignKey: 'category_id',
    as: 'monthlymodels'
})
Monthlymodel.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'category'
});

module.exports = { User, Movement, Operation, Category, Monthlymodel };
