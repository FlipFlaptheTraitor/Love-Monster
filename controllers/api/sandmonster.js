const router = require('express').Router();

router.get('/', (req,res)=> {
    res.render('sand')
});

module.exports = router;