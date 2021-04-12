const router = require('express').Router();

const userRoutes = require('./user-routes');
const mudRoutes = require('./mudmonster')
const seaRoutes = require('./seamonster');
const snowRoutes = require('./snowmonster')
const lavaRoutes = require('./lavamonster')
const monsterQs = require('./monsterQs')
const monsterRoutes = require('./monster-routes.js');
const matchRoutes = require('./match-routes');
const chatRoutes = require('./chat-routes');
const wildRoutes = require('./wildthing');

router.use('/monsterQs', monsterQs);
router.use('/users', userRoutes);
router.use('/monsters', monsterRoutes);
router.use('/matches', matchRoutes)
router.use('/mudmonster', mudRoutes);
router.use('/seamonster', seaRoutes); 
router.use('/lavamonster', lavaRoutes);
router.use('/snowmonster', snowRoutes);
router.use('/chat', chatRoutes);
router.use('/wildthing', wildRoutes);


module.exports = router;