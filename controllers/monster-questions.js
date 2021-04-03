const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('monster-questions', {
        //Questions go here?
    });
});

module.exports = router;