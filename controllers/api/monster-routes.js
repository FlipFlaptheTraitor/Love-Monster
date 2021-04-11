const router = require('express').Router();
const { Monster } = require('../../models');

router.get('/', (req, res) => {
    Monster.findAll()
    .then(monsters => res.json(monsters))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})