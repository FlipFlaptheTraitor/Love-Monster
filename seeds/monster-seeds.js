const { Monster } = require('../models');

const monsterData = [
    {
        monster: 'Sand Monster'
    },
    {
        monster: 'Earth Monster'
    },
    {
        monster: 'Water Monster'
    },
    {
        monster: 'Lava Monster'
    }
];

const seedMonsters = () => Monster.bulkCreate(monsterData);

module.exports = seedMonsters;