const router = require('express').Router();

router.get('/', (req,res)=> {
    res.render('mud')
});

module.exports = router;