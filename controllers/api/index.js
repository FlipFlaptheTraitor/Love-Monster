const router = require('express').Router();

const userRoutes = require('./user-routes');
const monsterRoutes = require('./monster-routes');

router.use('/users', userRoutes);
// router.use('/monsters', monsterRoutes);


module.exports = router;