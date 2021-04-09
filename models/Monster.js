const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Monster extends model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        monster: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = Monster;