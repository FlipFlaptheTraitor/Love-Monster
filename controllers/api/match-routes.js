const router = require('express').Router();
const { Matches } = require('../../models');

router.get('/', (req, res) => {
    Matches.findAll()
    .then(matches => res.json(matches))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.get('/:id', (req, res) => {
    Matches.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(match => {
        if (!match) {
            res.status(404).json({ message: 'No monster found with this id' });
            return;
        }
        res.json(match);
    });
});

router.post('/', (req, res) => {
    Matches.create(req.body)
    .then( match => res.status(200).json(match))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  
    Matches.update(req.body, {
        where: {
            id: req.params.id
        }
    })
      .then(match => {
        if (!match[0]) {
          res.status(404).json({ message: 'No monster found with this id' });
          return;
        }
        res.json(match);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.delete('/:id', (req, res) => {
    Matches.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(match => {
        if (!match) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(match);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;