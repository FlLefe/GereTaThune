const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Movement extends Sequelize.Model {}

Movement.init(
    {
        type: {
            type: DataTypes.STRING,
        },
        amount: {
            type: DataTypes.FLOAT,
        },
        category_id: {
            type: DataTypes.INTEGER,
        },
        operation_id: {
            type: DataTypes.INTEGER,
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        tableName: 'movement',
    }
);

module.exports = Movement;
