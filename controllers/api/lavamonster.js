const router = require('express').Router();

router.get('/', (req,res)=> {
    res.render('./lava')
});

module.exports = router;