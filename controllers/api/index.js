const router = require('express').Router();
const userRoutes = require('./user-routes');
<<<<<<< HEAD
//const commentRoutes = require('./comment-routes');
const chatRoutes = require('./chat-routes');
router.use('/users', userRoutes);
//router.use('/comments', commentRoutes);
=======
const mudRoutes = require('./mudmonster')
const sandRoutes = require('./sandmonster')
const snowRoutes = require('./snowmonster')
const lavaRoutes = require('./lavamonster')
const monsterQs = require('./monsterQs')

router.use('/monsterQs', monsterQs);
router.use('/users', userRoutes);
router.use('/mudmonster', mudRoutes);
router.use('/sandmonster', sandRoutes);
router.use('/lavamonster', lavaRoutes);
router.use('/snowmonster', snowRoutes);

const chatRoutes = require('./chat-routes');
router.use('/users', userRoutes);
>>>>>>> 90dcb2e104d51b54e8ad56b8537deffdcedff153
router.use('/chat', chatRoutes);
module.exports = router;