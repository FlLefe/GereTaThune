const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Category extends Sequelize.Model {}

Category.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        operation_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'category',
    }
);

module.exports = Category;
