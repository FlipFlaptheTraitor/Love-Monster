const router = require('express').Router();
const homeRoutes = require('./home-routes.js');

// const monsterQs = require ('./monster-questions');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
// router.use('/monster-questions', monsterQs);
router.use('/api', apiRoutes);

router.use((req, res) => {
   res.status(404).end();
});

module.exports = router;