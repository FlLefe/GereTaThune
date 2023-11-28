const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Category extends Sequelize.Model {}

Category.init(
    {
        name: {
            type: DataTypes.STRING,
        },
        operation_id: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        tableName: 'list',
    }
);

module.exports = Category;
