const User = require('./user');
const Monster = require('./Monster');
const Matches = require('./Matches');


Monster.hasMany(User);
User.belongsTo(Monster);

User.belongsToMany(User,{ through: Matches, as: "userMonster", foreignKey: "monsterUserId" });
User.belongsToMany(User, { through: Matches, as: "userSuitor", foreignKey: "suitorUserId" });
module.exports = {
   User,
   Monster,
   Matches,
};