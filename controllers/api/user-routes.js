const router = require('express').Router();
const { User, Monster, Matches, Comment } = require('../../models');
const session = require('express-session');
const withAuth = require('../../utils/auth');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// get all users with their monster
router.get('/', (req, res) => {
    User.findAll({
        include: [
            {
                model: Monster
            }
        ],
        attributes: { exclude: ['password'] }
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
        attributes: { exclude: ['password'] },
        include: [
            {
                model: Monster
            },
            {
                model: Matches
            }
        ]
    })
    .then(user => {
      if(!user) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(user)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create new user
router.post('/', (req, res) => {
  User.create(req.body)
  .then( user => res.status(200).json(product))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
})


// login to account
router.post('/login',  (req, res) => {
    User.findOne({
        where: {
        email: req.body.username
        }
    }).then(dbUserData => {
        if (!dbUserData) {
        res.status(400).json({ message: 'No user with that username!' });
        return;
        }
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;
    
          res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
    });  
});


// logout out of account
router.post('/logout', withAuth, (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
})

// update user
router.put('/:id', withAuth, (req, res) => {
  
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
      .then(dbUserData => {
        if (!dbUserData[0]) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  })


// delete user
router.delete('/:id', withAuth, (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;