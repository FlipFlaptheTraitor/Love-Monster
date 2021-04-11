const router = require('express').Router();

const userRoutes = require('./user-routes');
const mudRoutes = require('./mudmonster')
const sandRoutes = require('./sandmonster')
const snowRoutes = require('./snowmonster')
const lavaRoutes = require('./lavamonster')
const monsterQs = require('./monsterQs')
const monsterRoutes = require('./monster-routes.js');
const matchRoutes = require('./match-routes');
const chatRoutes = require('./chat-routes');

router.use('/monsterQs', monsterQs);
router.use('/users', userRoutes);
router.use('/monsters', monsterRoutes);
router.use('/matches', matchRoutes)
router.use('/mudmonster', mudRoutes);
router.use('/sandmonster', sandRoutes);
router.use('/lavamonster', lavaRoutes);
router.use('/snowmonster', snowRoutes);
router.use('/users', userRoutes);
router.use('/chat', chatRoutes);

module.exports = router;