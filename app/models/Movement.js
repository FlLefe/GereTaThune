const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Movement extends Sequelize.Model {}

Movement.init(
    {
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Punctual",
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        operation_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        sequelize,
        tableName: 'movement',
    }
);

module.exports = Movement;
