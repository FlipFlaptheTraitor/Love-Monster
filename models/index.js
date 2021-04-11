const User = require('./user');
const Post = require('./post');
const Vote = require('./vote');
const Comment = require('./comment');
const Monster = require('./Monster');
const userAnswers = require('./user-answers');
const Matches = require('./Matches');
const Question = require('./question');


// User.hasMany(Post, {
//    foreignKey: 'user_id'
// });

// Post.belongsTo(User, {
//    foreignKey: 'user_id',
// });

// User.belongsToMany(Post, {
//    through: Vote,
//    as: 'vote_posts',
//    foreignKey: 'user_id'
// });

// Post.belongsToMany(User, {
//    through: Vote,
//    as: 'voted_posts',
//    foreignKey: 'post_id'
// });

// Vote.belongsTo(User, {
//    foreignKey: 'user_id'
//  });
 
//  Vote.belongsTo(Post, {
//    foreignKey: 'post_id'
//  });
 
//  User.hasMany(Vote, {
//    foreignKey: 'user_id'
//  });
 
//  Post.hasMany(Vote, {
//    foreignKey: 'post_id'
//  });

//  Comment.belongsTo(User, {
//     foreignKey: 'user_id'
//  });

//  Comment.belongsTo(Post, {
//     foreignKey: 'post_id'
//  });

//  User.hasMany(Comment, {
//     foreignKey: 'user_id'
//  });

//  Post.hasMany(Comment, {
//     foreignKey: 'post_id'
//  })

Monster.hasMany(User);
User.belongsTo(Monster);

 User.belongsToMany(User,{ through: Matches,as: "stuff", foreignKey: "id" });
 User.belongsToMany(User, { through: Matches, as: "suitor", foreignKey: "id" });
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