const router = require('express').Router();
const userRoutes = require('./user-routes');
const mudRoutes = require('./mudmonster');
const sandRoutes = require('./sandmonster');
const snowRoutes = require('./snowmonster');
const lavaRoutes = require('./lavamonster');
const monsterQs = require('./monsterQs');
const wildRoutes = require('./wildthing');

router.use('/monsterQs', monsterQs);
router.use('/users', userRoutes);
router.use('/mudmonster', mudRoutes);
router.use('/sandmonster', sandRoutes);
router.use('/lavamonster', lavaRoutes);
router.use('/snowmonster', snowRoutes);
router.use('/wildthing', wildRoutes);

const chatRoutes = require('./chat-routes');
router.use('/users', userRoutes);
router.use('/chat', chatRoutes);
module.exports = router;