const router = require('express').Router();

const monsterRoutes = require('./monster-routes.js');
const userRoutes = require('./user-routes.js'); 
const matchRoutes = require('./match-routes');


router.use('/users', userRoutes);
router.use('/monsters', monsterRoutes);
router.use('/matches', matchRoutes)

module.exports = router;