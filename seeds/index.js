const seedUsers = require('./user-seeds');
const seedMonsters = require('./monster-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n------ DATABASE SYNCED -------\n');

    await seedUsers();
    console.log('\n------ USERS SEEDED  -------\n');
    
    await seedMonsters();
    console.log('\n------ MONSTERS SEEDED  -------\n');

    await seedMatches();
    console.log('\n------ MATCHES SEEDED  -------\n');

    process.exit(0);
};

seedAll();