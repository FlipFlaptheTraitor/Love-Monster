const { User } = require('../models');

const UserData = [
    {
        username: 'Mike',
        email: 'aaa@bbb.com',
        password: 'password',
        monsterId: 1
    },
    {
        username: 'Sam',
        email: 'aab@bbb.com',
        password: 'password',
        monsterId: 2
    },
    {
        username: 'Julie',
        email: 'aba@bbb.com',
        password: 'password',
        monsterId: 3
    },
    {
        username: 'Alex',
        email: 'abb@bbb.com',
        password: 'password',
        monsterId: 4
    }
];

const seedUsers = () => User.bulkCreate(UserData);

module.exports = seedUsers;