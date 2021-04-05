const { User } = require('../models');

const UserData = [
    {
        username: 'Mike',
        password: 'password',
        monster_id: '1'
    },
    {
        username: 'Sam',
        password: 'password',
        monster_id: '2'
    },
    {
        username: 'Julie',
        password: 'password',
        monster_id: '3'
    },
    {
        username: 'Alex',
        password: 'password',
        monster_id: '4'
    }
];

const seedUsers = () => User.bulkCreate(UserData);

module.exports = seedUsers;