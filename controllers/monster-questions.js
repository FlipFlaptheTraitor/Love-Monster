const router = requre('express').router();

router.get('/', (req,res) => {
    res.render('monster-questions');
});

module.exports = router;