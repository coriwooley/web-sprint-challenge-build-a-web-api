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

router.put('/:id', md.validateId, md.validateAction, async (req, res, next) => {
    try{
        const updatedAction = await Actions.update(req.params.id, req.body)
        res.status(200).json(updatedAction)
    } catch(err){
        next(err)
    }
})

router.delete('/:id', md.validateId, async (req, res, next) => {
    try{
        await Actions.remove(req.params.id)
        res.json(req.action)
    } catch(err){
        next(err)
    }
})

router.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message1: "There was an error performing the required operation",
        message2: err.message
    })
    next()
})

module.exports = router
