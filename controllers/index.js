const router = require('express').Router();

const monsterQs = require ('./monster-questions');
const apiRoutes = require('./api');

router.use('/', monsterQs);
router.use('./api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;