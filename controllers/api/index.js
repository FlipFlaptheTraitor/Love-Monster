const router = require('express').Router();

const userRoutes = require('./user-routes');
const monsterRoutes = require('./monster-routes');

const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
// router.use('/monsters', monsterRoutes);

module.exports = router;