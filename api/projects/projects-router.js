const express = require('express')

const Projects = require('./projects-model')
const md = require('./projects-middleware')

const router = express.Router()

router.get('/', (req, res, next) => {
    Projects.get()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(next)
})

router.get('/:id', md.validateId, (req, res) => {
    res.json(req.project)
})

router.post('/', md.validatePost, (req, res, next) => {
    Projects.insert({
        name: req.body.name,
        description: req.body.description,
        completed: req.body.completed
    })
    .then(project => {
        res.status(201).json(project)
    })
    .catch(next)
})

router.put('/:id', (req, res) => {
    console.log(req.method)
})

router.delete('/:id', (req, res) => {
    console.log(req.method)
})

router.get('/:id/actions', (req, res) => {
    console.log(req.method)
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