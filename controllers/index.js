const router = require('express').Router();


module.exports = router;
const monsterQs = require ('./monster-questions');

router.use('/', monsterQs);
