const { User } = require('../models');

const UserData = [
    {
        username: 'Mike',
        password: 'password',
        monsterId: 1
    },
    {
        username: 'Sam',
        password: 'password',
        monsterId: 2
    },
    {
        username: 'Julie',
        password: 'password',
        monsterId: 3
    },
    {
        username: 'Alex',
        password: 'password',
        monsterId: 4
    }
];

const seedUsers = () => User.bulkCreate(UserData);

module.exports = seedUsers;