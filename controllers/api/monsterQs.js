const router = require('express').Router();


const monsterQs = require ('./monster-questions');

router.use('/', monsterQs);

module.exports = router;