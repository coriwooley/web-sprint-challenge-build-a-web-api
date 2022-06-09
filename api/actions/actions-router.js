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

router.get('/:id', md.validateId, (req, res, next) => {
    res.json(req.action)
})

router.post('/', (req, res) => {
    //do something here
})

router.put('/:id', (req, res) => {
    //do something here
})

router.delete('/:id', (req, res) => {
    //do something here
})



module.exports = router
