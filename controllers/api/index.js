const router = require('express').Router();

const userRoutes = require('./user-routes');
//const commentRoutes = require('./comment-routes');
const chatRoutes = require('./chat-routes');
router.use('/users', userRoutes);
//router.use('/comments', commentRoutes);
router.use('/chat', chatRoutes);
module.exports = router;