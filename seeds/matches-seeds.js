const { Matches } = require('../models');

const MatchesData = [
    {
        monsterUserId: '1',
        suitorUserId: '2'
    },
    {
        monsterUserId: '1',
        suitorUserId: '3'
    },
    {
        monsterUserId: '2',
        suitorUserId: '3'
    },
    {
        monsterUserId: '4',
        suitorUserId: '1'
    }
];

const seedMatches = () => Matches.bulkCreate(MatchesData);

module.exports = seedMatches;