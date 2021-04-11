const User = require('./user');
const Post = require('./post');
const Vote = require('./vote');
const Comment = require('./comment');
const Monster = require('./Monster');
const userAnswers = require('./user-answers');
const Matches = require('./Matches');
const Question = require('./question');


Monster.hasMany(User);
User.belongsTo(Monster);

User.belongsToMany(User,{ through: Matches, as: "userMonster", foreignKey: "monsterUserId" });
User.belongsToMany(User, { through: Matches, as: "userSuitor", foreignKey: "suitorUserId" });
module.exports = {
   User,
   Post,
   Vote,
   Comment,
   Monster,
   userAnswers,
   Matches,
   Question
};