const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class User extends Sequelize.Model {}

User.init(
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        role: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        tableName: 'user',
    }
);

module.exports = User;
