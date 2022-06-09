const express = require('express')

const Actions = require('./actions-model')
const md = require('./actions-middlware')

const router = express.Router()

router.get('/', (req, res) => {
    Actions.get()
    .then(actions => {
        res.status(200).json(actions)
    })
})

router.get('/:id', md.validateId, (req, res) => {
    res.json(req.action)
})

router.post('/', md.validateAction, (req, res, next) => {
    Actions.insert(req.body)
    .then(newAction => {
        res.status(201).json(newAction)
    })
    .catch(next)
})

router.put('/:id', (req, res) => {
    //do something here
})

router.delete('/:id', (req, res) => {
    //do something here
})



module.exports = router
