const { Monster } = require('../models');

const monsterData = [
    {
        monster: 'Sand Monster'
    },
    {
        monster: 'Rock Monster'
    },
    {
        monster: 'Water Monster'
    },
    {
        monster: 'Land Monster'
    }
];

const seedMonsters = () => Monster.bulkCreate(monsterData);

module.exports = seedMonsters;