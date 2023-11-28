const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Operation extends Sequelize.Model {}

Operation.init(
    {
        name: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        tableName: 'operation',
    }
);

module.exports = Operation