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
        email: 'aaa@bbb.com',
        password: 'password',
        monsterId: 2
    },
    {
        username: 'Julie',
        email: 'aaa@bbb.com',
        password: 'password',
        monsterId: 3
    },
    {
        username: 'Alex',
        email: 'aaa@bbb.com',
        password: 'password',
        monsterId: 4
    }
];

const seedUsers = () => User.bulkCreate(UserData);

module.exports = seedUsers;