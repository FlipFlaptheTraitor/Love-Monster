const router = require('express').Router();

router.get('/', (req,res)=> {
    res.render('wildthing')
});

module.exports = router;