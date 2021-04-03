const router = requre('express').Router();

router.get('/', (req,res) => {
    res.render('monster-questions');
});

module.exports = router;