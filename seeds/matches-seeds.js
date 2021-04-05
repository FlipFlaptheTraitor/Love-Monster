const { Matches } = require('../models');

const MatchesData = [
    {
        monster_id: '1',
        suitor_id: '2'
    },
    {
        monster_id: '1',
        suitor_id: '3'
    },
    {
        monster_id: '2',
        suitor_id: '3'
    },
    {
        monster_id: '4',
        suitor_id: '1'
    }
];

const seedMatches = () => Matches.bulkCreate(MatchesData);

module.exports = seedMatches;