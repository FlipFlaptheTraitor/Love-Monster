const router = require('express').Router();

const userRoutes = require('./user-routes');
// const commentRoutes = require('./comment-routes');
const mudRoutes = require('./mudmonster')
const sandRoutes = require('./sandmonster')
const snowRoutes = require('./snowmonster')
const lavaRoutes = require('./lavamonster')
const monsterQs = require('./monsterQs')

router.use('/monsterQs', monsterQs);
router.use('/users', userRoutes);
// router.use('/comments', commentRoutes);
router.use('/mudmonster', mudRoutes);
router.use('/sandmonster', sandRoutes);
router.use('/lavamonster', lavaRoutes);
router.use('/snowmonster', snowRoutes);

module.exports = router;