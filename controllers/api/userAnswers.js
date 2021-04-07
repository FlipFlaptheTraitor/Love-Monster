const router = require('express').Router();
const Answers = require('../models/user-answers');

router.put('/', (req, res) => {
    if(req.body.green) {
        Answers.increment('green', {where: {userId: req.body.userId}}) 
    }
    if(req.body.red) {
        Answers.increment('red', {where: {userId: req.body.userId}}) 
    }
    if(req.body.yellow) {
        Answers.increment('yellow', {where: {userId: req.body.userId}}) 
    }
    if(req.body.blue) {
        Answers.increment('blue', {where: {userId: req.body.userId}}) 
    }
})