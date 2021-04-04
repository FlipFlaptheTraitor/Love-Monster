const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Question extends Model{};

Question.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    questionAsked: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    greenAnswerChoice: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    yellowAnswerChoice: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    redAnswerChoice: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    blueAnswerChoice: {
        type: DataTypes.STRING,
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

module.exports = Question;