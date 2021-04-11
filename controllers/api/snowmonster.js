const router = require('express').Router();

router.get('/', (req,res)=> {
    res.render('snow')
});

module.exports = router;