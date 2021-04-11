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

router.get('/:id', (req, res) => {
    Monster.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(monster => {
        if (!monster) {
            res.status(404).json({ message: 'No monster found with this id' });
            return;
        }
        res.json(monster);
    });
});

router.post('/', (req, res) => {
    Monster.create(req.body)
    .then( monster => res.status(200).json(monster))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  
    Monster.update(req.body, {
        where: {
            id: req.params.id
        }
    })
      .then(dbMonsterData => {
        if (!dbMonsterData[0]) {
          res.status(404).json({ message: 'No monster found with this id' });
          return;
        }
        res.json(dbMonsterData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.delete('/:id', (req, res) => {
    Monster.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbMonsterData => {
        if (!dbMonsterData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbMonsterData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;