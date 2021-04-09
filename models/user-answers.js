const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class userAnswers extends Model {}

userAnswers.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    yellow: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    red: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    green: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    blue: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'question'
},
);

module.exports = userAnswers;