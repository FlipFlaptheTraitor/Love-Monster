const router = require('express').Router();
const { User, Monster, Matches } = require('../../models');

// get all users with their monster
router.get('/', (req, res) => {
    User.findAll({
        include: [
            {
                model: Monster
            }
        ]
    })
    .then(users => res.json(users))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get one user with monster and matches
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Monster
            },
            {
                model: Matches
            }
        ]
    })
    .then(user => res.json(user))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;