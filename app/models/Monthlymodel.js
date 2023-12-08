const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Monthlymodel extends Sequelize.Model {}

Monthlymodel.init(
    {
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        comment: {
            type: DataTypes.INTEGER,
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
        tableName: 'monthlymodel',
    }
);

module.exports = Monthlymodel;
