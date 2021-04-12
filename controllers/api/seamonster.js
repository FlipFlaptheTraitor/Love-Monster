const router = require('express').Router();

router.get('/', (req,res)=> {
    res.render('sea')
});

module.exports = router;