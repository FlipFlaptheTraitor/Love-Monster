const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');

// const monsterQs = require ('./monster-questions');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
   res.status(404).end();
});

module.exports = router;